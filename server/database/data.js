const { config } = require('dotenv');
const mysql = require('mysql-await');

const connection = mysql.createConnection({
    host: process.env.BASE_URL,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB
  });
  
connection.connect();

connection.on(`error`, (err) => {
    console.error(`Connection error ${err.code}`);
  });
  
module.exports = connection ;