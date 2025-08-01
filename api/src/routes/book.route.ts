import {
    getAll,
    getByTitle
} from '../controllers/Book.controller';

const express = require('express')
const routes = express()

routes.get("/:title", getByTitle)
routes.get("/", getAll)

export default routes;