const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

app.use(cors());
app.use(express.json()); //allows us to access the req.body

app.listen(5000, ()=>{
    console.log("Server is starting on port 5000");
});