-- Revelation
SET @bookId = (SELECT id FROM book WHERE title = 'Revelation');
INSERT INTO chapter(number, verse_count, book_id)
VALUES
    (1, 20, @bookId),
    (2, 29, @bookId),
    (3, 22, @bookId),
    (4, 11, @bookId),
    (5, 14, @bookId),
    (6, 17, @bookId),
    (7, 17, @bookId),
    (8, 13, @bookId),
    (9, 21, @bookId),
    (10, 11, @bookId),
    (11, 19, @bookId),
    (12, 17, @bookId),
    (13, 18, @bookId),
    (14, 20, @bookId),
    (15, 8, @bookId),
    (16, 21, @bookId),
    (17, 18, @bookId),
    (18, 24, @bookId),
    (19, 21, @bookId),
    (20, 15, @bookId),
    (21, 27, @bookId),
    (22, 21, @bookId);
