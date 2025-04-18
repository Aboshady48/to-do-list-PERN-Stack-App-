const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "159159",
  host: "localhost",
  port: 5432,
  database: "pern_todo_list_db"
});

module.exports = pool;
