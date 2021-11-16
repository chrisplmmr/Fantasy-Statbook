const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'chrisplum',
    password: 'cpadmin',
    host: 'localhost',
    database: 'fantasy_statbook_dev',
    port: 5432
});

module.exports = pool;