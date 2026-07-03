import {
    getAll,
    getByTitle
} from '../controllers/Book.controller';

const express = require('express')
const routes = express()

/**
 * @swagger
 * /api/book:
 *      get:
 *        summary: Returns all the books stored in the database.
 *        tags: [Book]
 *        responses:
 *          200:
 *             description: All the books
 *             content:
 *                 application/json:
 *                     schema:
 *                     $ref: '#/components/schemas/BookArray'
 */
routes.get("/", getAll)

/**
 * @swagger
 * /api/book/{title}:
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