require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const pool = require("./db.js");
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const baseRoutes = require('./routes');
const cookie = require('express-session/session/cookie');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(
	session({
		secret: process.env.SESSION_SECRET || 'hunter2',
		resave: false,
		saveUninitialized: false,
	})
);

// const config = {
// 	server: process.env.DB_SERVER || 'localhost',
// 	port: process.env.DB_PORT || 5432,
// 	user: process.env.DB_USER || 'chrisplum',
// 	password: process.env.DB_PASSWORD || 'cpadmin',
// 	database: process.env.DB_PROD || 'fantasy_statbook_dev',
// 	stream: false,
// 	options: {
// 		enableArithAbort: true,
// 		encrypt: false,
// 		useUTC: true,
// 	},
// 	pool: {
// 		max: 20,
// 		min: 0,
// 		idleTimeoutMillis: 15000,
// 	},
// };

// sql
// .connect(credentials)
// .then((pool) => {
// 	if (pool.connected) {
// 		console.log('Connecting to database: [OK]');
// 	}
// 	return pool;
// })
// .catch(function (err) {
// 	console.log('Connecting to database: [FAILED]');
// 	console.log(err);
// });

app.use(baseRoutes);

app.get('/*', function (req, res) {
	res.render('404');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
	console.log(`Server successfully started on port ${PORT}`)
);
