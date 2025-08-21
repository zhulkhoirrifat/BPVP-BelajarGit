const mysql = require("mysql2");
const dotenv = require('dotenv');

dotenv.config();

const connectionPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
connectionPool.getConnection((err) => {
    if (err) {
        throw err;
    }
});

module.exports = { connectionPool }