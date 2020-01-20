const sql = require('mysql');
require('dotenv').config();
if (process.env.JAWSDB_URL) {
    connection = sql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = sql.createConnection({
        host     : process.env.SQL_HOST.toString(),
        user     : process.env.SQL_USER.toString(),
        port     : 3306,
        password : process.env.SQL_PW.toString(),
        database : process.env.DB_NAME.toString(),
    });
}


connection.connect((err)=> {
    if (err) throw err;
});
module.exports = connection;