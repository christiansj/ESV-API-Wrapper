/**
 * Book model class contains functionality for fetching data from the MySQL database.
 */
import { executeQuery } from '../db';
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

export default Book;
