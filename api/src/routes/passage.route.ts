import { getPassage } from "../controllers/Passage.controller"

const express = require('express')
const routes = express()

routes.get('/:passage', getPassage)

export default routes