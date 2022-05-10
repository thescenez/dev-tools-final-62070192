const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "swtool.cw3zelm75qxy.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "A!2ZP9pv",
  database: "62070192",
  waitForConnections: true,
  connectionLimit: 50,
  queueLimit: 0,
  dateStrings: true,
  timezone: "Asia/Bangkok",
});

module.exports = pool;
