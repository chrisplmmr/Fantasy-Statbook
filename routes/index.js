// SERVER //

const express = require('express');
const router = express.Router();
const flash = require('express-flash');
const sql = require("../db.js");
const path = require('path');
const fetch = require('node-fetch');
const axios = require('axios');

router.get('/', async (req, res) => {
	try{
        const playerData = await sql.query("SELECT * FROM test_table;");
        console.log(playerData.rows);
    } catch(err) {
        console.error(err.message);
    }
	res.render('index');
});

router.get('/template', function (req, res) {
	res.render('template');
});

router.get('/players', function (req, res) {
	res.render('players');
});

router.get('/seasonal', function (req, res) {
	res.render('seasonal');
});

router.get('/alltime', function (req, res) {
	res.render('alltime');
});


module.exports = router;
