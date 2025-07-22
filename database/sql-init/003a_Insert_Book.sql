SET @testament = (SELECT id FROM testament WHERE name = 'Old Testament');

SET @category = (SELECT id FROM book_category WHERE name = 'Pentateuch');
INSERT INTO book(name, chapter_count, testament_id, book_category_id)
VALUES('Genesis', 40, @testament, @category);


SET @testament = (SELECT id FROM testament WHERE name = 'New Testament');

SET @category = (SELECT id FROM book_category WHERE name = "Paul's Letters");
INSERT INTO book(name, chapter_count, testament_id, book_category_id)
VALUES('Galatians', 6, @testament, @category);