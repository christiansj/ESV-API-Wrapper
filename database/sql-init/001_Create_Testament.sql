CREATE TABLE IF NOT EXISTS testament(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    CONSTRAINT unique_testament_name UNIQUE(name)
);
