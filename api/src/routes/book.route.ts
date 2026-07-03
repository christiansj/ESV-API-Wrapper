/**
 * @swagger
 * components:
 *      schemas:
 *          Book:
 *              type: object
 *              required:
 *                  - title
 *              properties:
 *                  id:
 *                      type: number
 *                      description: The unique id of the book
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
 *              example:
 *                  id: 1
 *                  title: Genesis
 *                  chapterCount: 40
 *                  testamentName: Old
 *                  categoryName: Pentateuch
 */

/**
 * @swagger
 * tags:
 *      name: Book
 *      description: Endpoint for fetching biblical books.
 */
import {
    getAll,
    getByTitle
} from '../controllers/Book.controller';

const express = require('express')
const routes = express()

/**
 * @swagger
 * /book:
 *      get:
 *        summary: Returns all the books stored in the database.
 *        tags: [Book]
 *        responses:
 *          200:
 *             description: All the books
 *             content:
 *                 application/json:
 *                     schema:
 *                        type: array
 *                        items:
 *                            $ref: '#/components/schemas/Book'
 */
routes.get("/", getAll)

/**
 * @swagger
 * /book/{title}:
 *      get:
 *        summary: Gets a book by title   
 *        tags: [Book]
 *        parameters:
 *          - in: path
 *            name: title
 *            schema:
 *               type: string
 *            required: true
 *            description: The book's title 
 *        responses:
 *          200:
 *              description: The found book
 *              content:
 *                  application/json:
 *                      schema:
 *                      $ref: '#/components/schemas/Book'
 *          404:
 *              description: Returned if book was not found
 *              content:
 *                  application/json:
 *                      schema:
 *                      $ref: '#/components/schemas/ErrorResponse'
 */
routes.get("/:title", getByTitle)

export default routes;