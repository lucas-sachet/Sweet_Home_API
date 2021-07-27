const mysql = require('mysql')
const mysql2 = require('mysql2/promise')

exports.execSql = (sqlQry) => {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
          host: process.env.MYSQL_HOST || 'localhost',
          user: process.env.SQL_USER || 'root',
          password: process.env.SQL_PASSWORD || 'root',
          database: process.env.SQL_DB || 'sweet_home'
        });
  
      
      connection.query(sqlQry, function (error, results, fields) {
        if (error)
          reject(error);
        else
          resolve(results);
        connection.end();
      });
  
    });
  
}

  exports.transaction = async (queries) => {
    if (!Array.isArray(queries)) queries = [queries];
    const connection = await mysql2.createConnection({
              host: process.env.MYSQL_HOST || 'localhost',
              port: process.env.MYSQL_PORT || 3306,
              user: process.env.SQL_USER || 'root',
              password: process.env.SQL_PASSWORD,
              database: process.env.SQL_DB
          });
  
      
    try {
      await connection.beginTransaction();
      const queryPromises = [];
  
      queries.forEach((query, index) => {
        queryPromises.push(connection.query(query));
      });
      const results = await Promise.all(queryPromises);
      //console.log("cmtout")
      await connection.commit();
      await connection.end();
      return results;
    } catch (err) {
      //console.log("back")
      await connection.rollback();
      await connection.end();
      return Promise.reject(err);
    }
}