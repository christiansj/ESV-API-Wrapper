/**
 * @swagger
 * components:
 *      schemas:
 *          ChapterArray:
 *              type: array
 *              items:
 *                  type: object
 *                  properties:
 *                      number: 
 *                          type: number
 *                          description: The chapter number.
 *                      verseCount:
 *                          type: number
 *                          description: The number of verses in the chapter.
 *                  example:
 *                      - number: 1
 *                        verseCount: 23
 *                      - number: 2
 *                        verseCount: 24
 *                      - number: 3
 *                        verseCount: 21
 *          Book:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      description: The title of the book
 *                  chapterCount:
 *                      type: number
 *                      description: The number of chapters in the book
 *                  testamentName:
 *                      type: string
 *                      description: The testament of the book (examples - Old, New)
 *                  categoryName:
 *                      type: string
 *                      description: The type of book (examples - Pentateuch, Gospels, Paul's letters)
 *                  chapters:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/ChapterArray'
 *              example:
 *                  title: Genesis
 *                  chapterCount: 40
 *                  testamentName: Old
 *                  categoryName: Pentateuch
 *                  chapters:
 *                      - number: 1
 *                        verseCount: 31
 *                      - number: 2
 *                        verseCount: 25
 *                      - number: 3
 *                        verseCount: 24
 *          BookArray:
 *              type: object
 *              properties:
 *                  data:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Book'
 *              example:
 *                  data:
 *                      - title: Genesis
 *                        chapterCount: 40
 *                        testamentName: Old
 *                        categoryName: Pentateuch
 *                      - title: Exodus
 *                        chapterCount: 40
 *                        testamentName: Old
 *                        categoryName: Pentateuch                         
 */

/**
 * @swagger
 * tags:
 *      - name: Book
 *        description: Endpoint for fetching biblical books.
 *      - name: Passage
 *        description: Endpoint for fetching passages from esv.org.
 */

/**
 * @swagger
 * components:
 *      schemas:
 *          Passage:
 *              type: object
 *              properties:
 *                  data:
 *                      type: object
 *                      properties:
 *                          query:
 *                              type: string
 *                              description: The passage query from the query. (examples - Genesis 1:3, John 3:16)
 *                          passage:
 *                              type: string
 *                              description: The passage returned from the official ESV API (esv.org).
 *              example:
 *                  data:
 *                      query: Mark 16:15
 *                      passage: "Mark 16:15\n\n  [15] And he said to them, “Go into all the world and proclaim the gospel to the whole creation. (ESV)"
 */