SET @bookId = (SELECT id FROM book WHERE title = 'Galatians');

INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 24, @bookId),
    (2, 21, @bookId),
    (3, 29, @bookId),
    (4, 31, @bookId),
    (5, 26, @bookId),
    (6, 23, @bookId);