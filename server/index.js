const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db.js");
const port = 5000;

app.use(cors());
app.use(express.json());


// ROUTES
app.get('/', async(req, res) => {
    res.status(200).send('Hello World!');
});

// Listen for server
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});