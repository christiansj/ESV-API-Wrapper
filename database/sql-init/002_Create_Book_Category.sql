CREATE TABLE IF NOT EXISTS book_category(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    CONSTRAINT unique_bookCategory_name UNIQUE(name)
);
