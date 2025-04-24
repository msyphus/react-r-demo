const Pool = require('pg').Pool
require('dotenv').config({
    path: './.env'
});
const db = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

module.exports = db;