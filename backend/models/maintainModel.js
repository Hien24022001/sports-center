let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: 'mysql_HIT2k1',
    database: 'sports-center'
};

let connection = mysql.createConnection(config);

exports.getMaintainList = async function() {
    return await connection.awaitQuery(
        `call prc_Loc_Cac_Dich_Vu_Theo_Diem_Trung_Binh(${point}, "${type}")`
    );
}