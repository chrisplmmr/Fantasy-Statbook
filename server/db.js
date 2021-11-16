const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    database: "fantasy",
    port: "5342",
});

module.exports = pool;