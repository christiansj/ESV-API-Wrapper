CREATE TABLE IF NOT EXISTS chapter(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    number INT NOT NULL,
    verse_count INT NOT NULL,
    book_id INT NOT NULL,
    CONSTRAINT chapter_book_fk
        FOREIGN KEY(book_id) REFERENCES book(id),
    CONSTRAINT unique_chapter_key UNIQUE(number, book_id)
);