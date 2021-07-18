const mysql = require('mysql')
// const mysql2 = require('mysql2/promise')


const db = mysql.createPool({
    host: 'localhost',
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB
  })