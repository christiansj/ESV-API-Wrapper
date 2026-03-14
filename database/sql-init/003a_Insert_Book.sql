SET @testament = (SELECT id FROM testament WHERE name = 'Old Testament');

-- Pentateuch
SET @category = (SELECT id FROM book_category WHERE name = 'Pentateuch');
INSERT INTO book(title, chapter_count, testament_id, book_category_id)
VALUES
    ('Genesis', 40, @testament, @category),
    ('Exodus', 40, @testament, @category),
    ('Leviticus', 27, @testament, @category),
    ('Numbers', 36, @testament, @category),
    ('Deuteronomy', 34, @testament, @category);

SET @category = (SELECT id FROM book_category WHERE name = 'Books of Wisdom');
INSERT INTO book(title, chapter_count, testament_id, book_category_id)
VALUES
    ('Job', 42, @testament, @category),
    ('Psalms', 150, @testament, @category),
    ('Proverbs', 31, @testament, @category),
    ('Ecclesiastes', 12, @testament, @category);

SET @testament = (SELECT id FROM testament WHERE name = 'New Testament');

-- Gospels
SET @category = (SELECT id FROM book_category WHERE name = "Gospels"); 
INSERT INTO book(title, chapter_count, testament_id, book_category_id)
VALUES
    ('Matthew', 28, @testament, @category),
    ('Mark', 16, @testament, @category),
    ('Luke', 24, @testament, @category),
    ('John', 21, @testament, @category);

-- Paul's Letters
SET @category = (SELECT id FROM book_category WHERE name = "Paul's Letters");
INSERT INTO book(title, chapter_count, testament_id, book_category_id)
VALUES
    ('Romans', 16, @testament, @category),
    ('1 Corinthians', 16, @testament, @category),
    ('2 Corinthians', 13, @testament, @category),
    ('Galatians', 6, @testament, @category),
    ('Ephesians', 6, @testament, @category),
    ('Philippians', 4, @testament, @category),
    ('Colossians', 4, @testament, @category),
    ('1 Thessalonians', 5, @testament, @category),
    ('2 Thessalonians', 3, @testament, @category),
    ('1 Timothy', 6, @testament, @category),
    ('2 Timothy', 4, @testament, @category),
    ('Titus', 3, @testament, @category),
    ('Philemon', 1, @testament, @category);

-- Letters
SET @category = (SELECT id FROM book_category WHERE name = "Letters");
INSERT INTO book(title, chapter_count, testament_id, book_category_id)
VALUES
    ('Hebrews', 16, @testament, @category),
    ('James', 5, @testament, @category),
    ('1 Peter', 5, @testament, @category),
    ('2 Peter', 3, @testament, @category),
    ('1 John', 5, @testament, @category),
    ('2 John', 1, @testament, @category),
    ('3 John', 1, @testament, @category),
    ('Jude', 1, @testament, @category);

-- Revelation
SET @category = (SELECT id FROM book_category WHERE name = "Revelation");
INSERT INTO book(title, chapter_count, testament_id, book_category_id)
VALUES
    ('Revelation', 22, @testament, @category);