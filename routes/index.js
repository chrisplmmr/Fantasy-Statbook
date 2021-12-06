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
	res.render('matchup');
});

router.get('/adp', function (req, res) {
	res.render('adp');
});

router.get('/partials/2019_Players', function (req, res) {
	res.render('partials/2019_Players');
});

router.get('/alltime', function (req, res) {
	res.render('alltime');
});

router.get('/2019data', (_, res) => {
	res.sendFile(__dirname + '\\2019.txt');
});

router.get('/2018data', (_, res) => {
	res.sendFile(__dirname + '\\2018.txt');
});

router.get('/2017data', (_, res) => {
	res.sendFile(__dirname + '\\2017.txt');
});

router.get('/2016data', (_, res) => {
	res.sendFile(__dirname + '\\2016.txt');
});

router.get('/2015data', (_, res) => {
res.sendFile(__dirname + '\\2015.txt');
});

router.get('/2014data', (_, res) => {
	res.sendFile(__dirname + '\\2014.txt');
});

router.get('/2013data', (_, res) => {
	res.sendFile(__dirname + '\\2013.txt');
});

router.get('/2012data', (_, res) => {
	res.sendFile(__dirname + '\\2012.txt');
});

router.get('/2011data', (_, res) => {
	res.sendFile(__dirname + '\\2011.txt');
});

router.get('/2010data', (_, res) => {
	res.sendFile(__dirname + '\\2010.txt');
});

router.get('/2009data', (_, res) => {
	res.sendFile(__dirname + '\\2009.txt');
});

router.get('/2008data', (_, res) => {
	res.sendFile(__dirname + '\\2008.txt');
});

router.get('/2007data', (_, res) => {
	res.sendFile(__dirname + '\\2007.txt');
});

router.get('/2006data', (_, res) => {
	res.sendFile(__dirname + '\\2006.txt');
});

router.get('/2005data', (_, res) => {
	res.sendFile(__dirname + '\\2005.txt');
});

router.get('/2004data', (_, res) => {
	res.sendFile(__dirname + '\\2004.txt');
});

router.get('/2003data', (_, res) => {
	res.sendFile(__dirname + '\\2003.txt');
});

router.get('/2002data', (_, res) => {
	res.sendFile(__dirname + '\\2002.txt');
});

router.get('/2001data', (_, res) => {
	res.sendFile(__dirname + '\\2001.txt');
});

router.get('/2000data', (_, res) => {
	res.sendFile(__dirname + '\\2000.txt');
});

router.get('/1999data', (_, res) => {
	res.sendFile(__dirname + '\\1999.txt');
});

router.get('/1998data', (_, res) => {
	res.sendFile(__dirname + '\\1998.txt');
});

router.get('/1997data', (_, res) => {
	res.sendFile(__dirname + '\\1997.txt');
});

router.get('/1996data', (_, res) => {
	res.sendFile(__dirname + '\\1996.txt');
});

router.get('/1995data', (_, res) => {
	res.sendFile(__dirname + '\\1995.txt');
});

router.get('/1994data', (_, res) => {
	res.sendFile(__dirname + '\\1994.txt');
});

router.get('/1993data', (_, res) => {
	res.sendFile(__dirname + '\\1993.txt');
});

router.get('/1992data', (_, res) => {
	res.sendFile(__dirname + '\\1992.txt');
});

router.get('/1991data', (_, res) => {
	res.sendFile(__dirname + '\\1991.txt');
});

router.get('/1990data', (_, res) => {
	res.sendFile(__dirname + '\\1990.txt');
});

module.exports = router;
