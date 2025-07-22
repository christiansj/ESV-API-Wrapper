CREATE TABLE IF NOT EXISTS book(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    chapter_count INT,
    testament_id INT NOT NULL,
    book_category_id INT NOT NULL,
    CONSTRAINT unique_book_title UNIQUE(title),
    CONSTRAINT book_testament_fk
        FOREIGN KEY(testament_id) REFERENCES testament(id),
    CONSTRAINT book_bookCategory_fk
        FOREIGN KEY(book_category_id) REFERENCES book_category(id)
);
