/**
 * Book model class contains functionality for fetching data from the MySQL database.
 */
import { executeQuery } from '../db';
import { ResultCallback } from '../types';

// Constructor
const Book = function () {};

Book.getAll = (resultCallback: ResultCallback) => {
    const query = "SELECT title, chapter_count as chapterCount FROM book";
    executeQuery(query, null, resultCallback);
}

export default Book;
