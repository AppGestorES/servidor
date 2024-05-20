import mariadb from 'mariadb';
import util from "util";

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_PROD,
    password: process.env.CONTRASENASQL,
    database: process.env.DATABASESQL
});

export default pool;