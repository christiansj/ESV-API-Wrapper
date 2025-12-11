const express = require('express')
const routes = express()

routes.get("/", (request, response)=>{
    response.send("OK")
});

export default routes;