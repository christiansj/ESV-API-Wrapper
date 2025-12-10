-- Hebrews
SET @bookId = (SELECT id FROM book WHERE title = 'Hebrews');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 14, @bookId),
    (2, 18, @bookId),
    (3, 19, @bookId),
    (4, 16, @bookId),
    (5, 14, @bookId),
    (6, 20, @bookId),
    (7, 28, @bookId),
    (8, 13, @bookId),
    (9, 28, @bookId),
    (10, 39, @bookId),
    (11, 40, @bookId),
    (12, 29, @bookId),
    (13, 25, @bookId);

-- James
SET @bookId = (SELECT id FROM book WHERE title = 'James');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 27, @bookId),
    (2, 26, @bookId),
    (3, 18, @bookId),
    (4, 17, @bookId),
    (5, 20, @bookId);

-- 1 John
SET @bookId = (SELECT id FROM book WHERE title = '1 John');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 10, @bookId),
    (2, 29, @bookId),
    (3, 24, @bookId),
    (4, 21, @bookId),
    (5, 21, @bookId);

-- 2 John
SET @bookId = (SELECT id FROM book WHERE title = '2 John');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 13, @bookId);

-- 3 John
SET @bookId = (SELECT id FROM book WHERE title = '3 John');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 15, @bookId);

-- 1 Peter
SET @bookId = (SELECT id FROM book WHERE title = '1 Peter');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 25, @bookId),
    (2, 25, @bookId),
    (3, 22, @bookId),
    (4, 19, @bookId),
    (5, 14, @bookId);

-- 2 Peter
SET @bookId = (SELECT id FROM book WHERE title = '2 Peter');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 21, @bookId),
    (2, 22, @bookId),
    (3, 18, @bookId);

-- Jude
SET @bookId = (SELECT id FROM book WHERE title = 'Jude');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 25, @bookId);
