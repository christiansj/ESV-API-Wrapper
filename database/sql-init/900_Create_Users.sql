CREATE USER 'esv_consumer'@'%' IDENTIFIED BY 'esv!';
GRANT SELECT ON bible_db.* TO 'esv_consumer'@'%';