-- Romans
SET @bookId = (SELECT id FROM book WHERE title = 'Romans');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 32, @bookId),
    (2, 29, @bookId),
    (3, 31, @bookId),
    (4, 25, @bookId),
    (5, 21, @bookId),
    (6, 23, @bookId),
    (7, 25, @bookId),
    (8, 39, @bookId),
    (9, 33, @bookId),
    (10, 21, @bookId),
    (11, 36, @bookId),
    (12, 21, @bookId),
    (13, 14, @bookId),
    (14, 23, @bookId),
    (15, 33, @bookId),
    (16, 27, @bookId);

-- 1 Corinthians
SET @bookId = (SELECT id FROM book WHERE title = '1 Corinthians');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 31, @bookId),
    (2, 16, @bookId),
    (3, 23, @bookId),
    (4, 21, @bookId),
    (5, 13, @bookId),
    (6, 20, @bookId),
    (7, 40, @bookId),
    (8, 13, @bookId),
    (9, 27, @bookId),
    (10, 33, @bookId),
    (11, 34, @bookId),
    (12, 31, @bookId),
    (13, 13, @bookId),
    (14, 40, @bookId),
    (15, 58, @bookId),
    (16, 24, @bookId);

-- 1 Corinthians
SET @bookId = (SELECT id FROM book WHERE title = '2 Corinthians');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 24, @bookId),
    (2, 17, @bookId),
    (3, 18, @bookId),
    (4, 18, @bookId),
    (5, 21, @bookId),
    (6, 18, @bookId),
    (7, 16, @bookId),
    (8, 24, @bookId),
    (9, 15, @bookId),
    (10, 18, @bookId),
    (11, 33, @bookId),
    (12, 21, @bookId),
    (13, 14, @bookId);

-- Galatians
SET @bookId = (SELECT id FROM book WHERE title = 'Galatians');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 24, @bookId),
    (2, 21, @bookId),
    (3, 29, @bookId),
    (4, 31, @bookId),
    (5, 26, @bookId),
    (6, 23, @bookId);

-- Ephesians
SET @bookId = (SELECT id FROM book WHERE title = 'Ephesians');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
(1, 23, @bookId),
(2, 22, @bookId),
(3, 21, @bookId),
(4, 32, @bookId),
(5, 33, @bookId),
(6, 24, @bookId);

-- Philippians
SET @bookId = (SELECT id FROM book WHERE title = 'Philippians');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 30, @bookId),
    (2, 30, @bookId),
    (3, 21, @bookId),
    (4, 23, @bookId);
