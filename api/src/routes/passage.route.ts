import { getPassage } from "../controllers/Passage.controller"

const express = require('express')
const routes = express()

/**
 * @swagger
 * /api/passage/{passage}:
 *      get:
 *          summary: Fetches a passage from the official ESV API (esv.org)
 *          tags: [Passage]
 *          parameters:
 *              - in: path
 *                name: passage
 *                schema:
 *                    type: string
 *                required: true
 *                description: The passage of the book (examples - Genesis 1:1, John 3:16)
 *          responses:
 *              200:
 *                  description: The found Bible passage.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Passage'
 *              400:
 *                  description: Returned if the request contains an invalid passage format.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ErrorResponse'
 *                          example:
 *                              statusCode: 400
 *                              message: Invalid chapter of 33
 *              404:
 *                  description: Returned if the request contains a book not in the Bible.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ErrorResponse'
 *                          example:
 *                              statusCode: 404
 *                              message: Book 'ABC' was not found.
 */
routes.get('/:passage', getPassage)

export default routes