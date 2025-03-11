const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "honk2004",
  database: "dev_data",
});

module.exports = pool;