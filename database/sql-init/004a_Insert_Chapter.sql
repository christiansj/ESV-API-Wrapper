-- John
SET @bookId = (SELECT id FROM book WHERE title = 'John');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1,  51, @bookId),
    (2,  25, @bookId),
    (3,  36, @bookId),
    (4,  54, @bookId),
    (5,  47, @bookId),
    (6,  71, @bookId),
    (7,  53, @bookId),
    (8,  59, @bookId),
    (9,  41, @bookId),
    (10, 42, @bookId),
    (11, 57, @bookId),
    (12, 50, @bookId),
    (13, 38, @bookId),
    (14, 31, @bookId),
    (15, 27, @bookId),
    (16, 33, @bookId),
    (17, 26, @bookId),
    (18, 40, @bookId),
    (19, 42, @bookId),
    (20, 31, @bookId),
    (21, 25, @bookId);    

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