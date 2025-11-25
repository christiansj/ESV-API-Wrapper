-- Matthew
SET @bookId = (SELECT id FROM book WHERE title = 'Matthew');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 25, @bookId),
    (2, 23, @bookId),
    (3, 17, @bookId),
    (4, 25, @bookId),
    (5, 48, @bookId),
    (6, 34, @bookId),
    (7, 29, @bookId),
    (8, 34, @bookId),
    (9, 38, @bookId),
    (10, 42, @bookId),
    (11, 30, @bookId),
    (12, 50, @bookId),
    (13, 58, @bookId),
    (14, 36, @bookId),
    (15, 39, @bookId),
    (16, 28, @bookId),
    (17, 27, @bookId),
    (18, 35, @bookId),
    (19, 30, @bookId),
    (20, 34, @bookId),
    (21, 46, @bookId),
    (22, 46, @bookId),
    (23, 39, @bookId),
    (24, 51, @bookId),
    (25, 46, @bookId),
    (26, 75, @bookId),
    (27, 66, @bookId),
    (28, 20, @bookId);

-- Mark
SET @bookId = (SELECT id FROM book WHERE title = 'Mark');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 45, @bookId),
    (2, 28, @bookId),
    (3, 35, @bookId),
    (4, 41, @bookId),
    (5, 43, @bookId),
    (6, 56, @bookId),
    (7, 37, @bookId),
    (8, 38, @bookId),
    (9, 50, @bookId),
    (10, 52, @bookId),
    (11, 33, @bookId),
    (12, 44, @bookId),
    (13, 37, @bookId),
    (14, 72, @bookId),
    (15, 47, @bookId),
    (16, 20, @bookId);

-- John
SET @bookId = (SELECT id FROM book WHERE title = 'Luke');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1,  80, @bookId),
    (2,  52, @bookId),
    (3,  38, @bookId),
    (4,  44, @bookId),
    (5,  39, @bookId),
    (6,  49, @bookId),
    (7,  50, @bookId),
    (8,  56, @bookId),
    (9,  62, @bookId),
    (10, 42, @bookId),
    (11, 54, @bookId),
    (12, 59, @bookId),
    (13, 35, @bookId),
    (14, 35, @bookId),
    (15, 32, @bookId),
    (16, 31, @bookId),
    (17, 37, @bookId),
    (18, 43, @bookId),
    (19, 48, @bookId),
    (20, 47, @bookId),
    (21, 38, @bookId),
    (22, 71, @bookId),
    (23, 56, @bookId),
    (24, 53, @bookId);    

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

