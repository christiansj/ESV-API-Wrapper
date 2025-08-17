/**
 * Book model class contains functionality for fetching data from the MySQL database.
 */
import { executeQuery } from '../db';
import { IBook } from '../interfaces/Book.interface';
import { ResultCallback } from '../types';

// Constructor
const BookModel = function () {};

BookModel.getAll = (resultCallback: ResultCallback): void => {
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
    executeQuery(query, null)
        .then(result=>resultCallback(null, result))
        .catch(err=>resultCallback(err, null))
}


export function getCountWithTitle(title: string): Promise<number>{
    return new Promise<number>((resolve, reject)=>{
        executeQuery("SELECT COUNT(*) as count FROM book WHERE title = ?", [title])
            .then(result=>resolve(result[0].count))
            .catch(err=>reject(err))
    })
}


BookModel.getByTitle = (title: string, resultCallback: ResultCallback): void => {  
    const countPromise = getCountWithTitle(title);
    const bookPromise = getBookByTitleQuery(title);
    const chapterPromise = getChaptersQuery(title);
    
    Promise.all([countPromise, bookPromise, chapterPromise])
    .then(([count, book, chapters]: [number, IBook, any])=> {
        if(count == 0){
            resultCallback(null, []);
            return;
        }
        resultCallback(null, {...book["0"], chapters});
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
    return executeQuery(bookQuery, [title])
}


export function getChaptersQuery(bookTitle: string): Promise<unknown>{
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
    return executeQuery(chapterQuery, [bookTitle])
}


export default BookModel;
