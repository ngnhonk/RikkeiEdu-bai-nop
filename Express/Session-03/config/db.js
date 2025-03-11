const mysql = require("mysql2");

//   const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "honk2004",
//     database: "express_db",
//   });

//   connection.connect((err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('ket noi tc');
//   });

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "honk2004",
  database: "express_db",
});

module.exports = pool;
