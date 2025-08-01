/**
 * Book model class contains functionality for fetching data from the MySQL database.
 */
import { FieldPacket, RowDataPacket } from 'mysql2';
import { executeQuery, createConnection } from '../db';
import { ResultCallback } from '../types';

// Constructor
const Book = function () {};

Book.getAll = (resultCallback: ResultCallback) => {
    const query = `
        SELECT
            b.title,
            b.chapter_count as chapterCount,
            t.name as testamentName,
            bc.name as categoryName
        FROM 
            book b,
            testament t,
            book_category bc
        WHERE (
            b.testament_id = t.id
            AND b.book_category_id = bc.id
        );
    `;
    executeQuery(query, null, resultCallback);
}


function getCountWithTitle(title: string){
    const connection = createConnection()
    return new Promise((resolve, reject)=>{
        connection.query("SELECT COUNT(*) as count FROM book WHERE title = ?", title, (err, results: any)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(results[0].count)
        })
    });
}


Book.getByTitle = (title: string, resultCallback: ResultCallback) => {  
    const countPromise = getCountWithTitle(title);
    const bookPromise = getBookByTitleQuery(title);
    const chapterPromise = getChaptersQuery(title);
    
    Promise.all([countPromise, bookPromise, chapterPromise])
    .then(([count, books, chapters])=> {
        if(count == 0){
            resultCallback(null, []);
            return;
        }
        const payload = {
            title,
            chapters
        }
        console.log("books", books)
        resultCallback(null, payload);
    })
    .catch(err=>{
        console.error(err)
        resultCallback(err, null);
    })
}


function getBookByTitleQuery(title: string): Promise<unknown>{
    const bookQuery = `
        SELECT DISTINCT
            b.title,
            b.chapter_count as chapterCount,
            t.name as testamentName,
            bc.name as categoryName
        FROM 
            book b,
            testament t,
            book_category bc
        WHERE (
            b.title = ?
            AND b.testament_id = t.id
            AND b.book_category_id = bc.id
        );
    `;

   return new Promise((resolve, reject)=>{
        const connection = createConnection()
        connection.query(bookQuery, title, (err, result)=>{
            if(err){
                reject(err)
                return;
            }
            resolve(result);
        })

    })
    .catch(err=> {
        console.error(err);
    });
}


function getChaptersQuery(bookTitle: string): Promise<unknown>{
  const chapterQuery = `
        SELECT DISTINCT
            c.number,
            c.verse_count as verseCount
        FROM
            chapter c,
            book b
        WHERE(
            b.title = ?
            AND c.book_id = b.id
        )
        ORDER BY number;
    `;
    return new Promise((resolve, reject)=> {
        const connection = createConnection()
        connection.query(chapterQuery, bookTitle, (err, result)=> {
            if(err){
                reject(err)
                return;
            }
            resolve(result)
        })
    })
    .catch(err=>{
        console.error(err)
    });
}


export default Book;
