const mysql = require('../../mysql-connect.js');


exports.GetAll = (data) => {
    const sql = 'select'
    return mysql.execSql(sql);
}