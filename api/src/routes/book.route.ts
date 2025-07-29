import {
    getAll
} from '../controllers/Book.controller';

const express = require('express')
const routes = express()

routes.get("/", getAll)

export default routes;