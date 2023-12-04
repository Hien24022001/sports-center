let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: 'mysql_HIT2k1',
    database: 'sports-center'
};

let connection = mysql.createConnection(config);

exports.getAllUsers = async function() {
    return await connection.awaitQuery("SELECT * FROM tai_khoan");
}

exports.addUser = async function({ id, username, password, role, name, surname, address, point, level, cccd, gender, dateofbirth, hometown }) {
    if (role === 'HV') {
        await connection.awaitQuery(
            `call INSERT_TAI_KHOAN("${id}", "${username}", "${password}", NOW(), "${role}", 1, null, "${name}", "${surname}", "${address}", ${point}, "${level}", null, null, null, null, null)`
        )
    } else {
        await connection.awaitQuery(
            `call INSERT_TAI_KHOAN("${id}", "${username}", "${password}", NOW(), "${role}", 1, null, "${name}", "${surname}", null, null, null, "${cccd}", "${gender}", "${dateofbirth}", "${hometown}", null)`
        )
    }
}

exports.updateUser = async function({id, password}) {
    await connection.awaitQuery(
        `call UPDATE_TAI_KHOAN("${id}", "${password}")`
    )
}

exports.deleteUser = async function() {

}