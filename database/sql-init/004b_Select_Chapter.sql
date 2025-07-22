-- Select Statement for Chapter

/**
SELECT 
    c.number,
    c.verse_count as verseCount
FROM
    chapter c,
    book b
WHERE(
    b.name = ?
    AND c.book_id = b.id
);
*/
