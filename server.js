const express = require("express")
const cors = require("cors")
 
const app = express()

const corsOptions = {
    origin : "http://localhost:7171"
}

// parse rq of content-type - application/json
app.use(express.json())

// parse rq of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended : true}))

// simple router
app.get("/", (req, res) => {
    res.json({message : "Welcome to CRUD app by gl14"})
})

// set port, listen for requests