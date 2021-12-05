// SERVER //

const express = require('express');
const router = express.Router();
const flash = require('express-flash');
const pool = require("../db.js");
const path = require('path');
const fetch = require('node-fetch');
const axios = require('axios');
const anychart = require('anychart');


router.get('/', async (req, res) => {
	var cmd = 'SELECT * FROM test_table;';

	// callback
	pool.query(cmd, (err, qres) => {
		if (err) {
			console.log(err.stack);
		} else {
			// console.log(qres.rows);
			res.render('index', {playerData: qres.rows});
		}
	});
	//res.render('index');
});

router.get('/template', function (req, res) {
	res.render('template');
});

router.get('/home', function (req, res) {
	res.render('index');
});

router.get('/players', function (req, res) {
	
	res.render('players',
	{
		path : 'partials/2019_Players'
	});
});

router.get('/matchup', function (req, res) {
	var cmd = 'SELECT * FROM test_table;';

	// callback
	pool.query(cmd, (err, qres) => {
		if (err) {
			console.log(err.stack);
		} else {
			// console.log(qres.rows);
			res.render('matchup', {playerData: qres.rows});
		}
	});
	//res.render('matchup');
});

router.get('/seasonal', function (req, res) {
	res.render('seasonal');
});

router.get('/partials/2019_Players', function (req, res) {
	res.render('partials/2019_Players');
});

router.get('/alltime', function (req, res) {
	res.render('alltime');
});


// app.get('/', (_, res) => {
//     res.sendFile('index.html')
// })

router.get('/2019data', (_, res) => {
	// fetch('sus.txt')
	// .then(response => response.text())
	// .then(data => {
	// 	console.log(data);
	// 	res.send(data);
	// });
	//res.sendFile(__dirname + '/../data/yearly/2019.csv');
	res.sendFile(__dirname + '\\2019.txt');
});

module.exports = router;
