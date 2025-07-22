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


SET @testament = (SELECT id FROM testament WHERE name = 'New Testament');

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
    ('1 Thessalonians', 5, @testament, @category);