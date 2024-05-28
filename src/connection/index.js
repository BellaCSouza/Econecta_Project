const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost', 
    port: 3302,
    databse: 'sakila',
    user: 'root',
    password: 'root',
});

module.exports = connection;
//teste