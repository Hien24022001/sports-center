let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: 'mysql_HIT2k1',
    database: 'sports-center'
};
let connection = mysql.createConnection(config);
module.exports = { connection }

