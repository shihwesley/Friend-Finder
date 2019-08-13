const mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "199637wS",
  database: "todoDB"
});

module.exports = connection;

