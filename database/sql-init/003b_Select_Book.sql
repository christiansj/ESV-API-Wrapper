-- Select Statement for Book

/*
SELECT
	b.title,
	b.chapter_count as chapterCount,
	t.name as testamentName,
	bc.name as categoryName
FROM 
	book b,
	testament t,
	book_category bc
WHERE (
	b.testament_id = t.id
	AND b.book_category_id = bc.id
);
*/