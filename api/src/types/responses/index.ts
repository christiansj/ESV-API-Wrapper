/**
 * @swagger
 * components:
 *      schemas:
 *          ErrorResponse:
 *              type: object
 *              required:
 *                  - statusCode
 *                  - messsage
 *              properties:
 *                  statusCode:
 *                      type: number
 *                      description: The status code of the response (examples - 200, 400, 404)
 *                  message:
 *                      type: string
 *                      description: The error message
 *              example:
 *                  statusCode: 404
 *                  message: Resource not found
 */
type Json =  object | JsonArray | string | number | boolean | null

type JsonArray = Json[]

export const DataResponse = (data: JsonArray) => {return {data}}

export const ErrorResponse = (message: string | null, statusCode: number) => {
    return {statusCode, message}
}
