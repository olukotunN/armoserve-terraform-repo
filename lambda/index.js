const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOST,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE
});

exports.handler = async (event) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT 1 + 1 AS solution', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ result: results[0].solution }),
        });
      }
    });
  });
};

