const mysql2 = require("mysql2/promise");
const conn = mysql2.createConnection({
  host: ("localhost", "127.0.0.1"),
  // port: env.int("DATABASE_PORT", 3306),
  database: ("students_db", "students_db"),
  user: ("root", "root"),
  password: ("Suvechha@200", "Suvechha@200"),
});

module.exports = conn;
