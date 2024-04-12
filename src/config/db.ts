// db.ts
import mysql from "mysql";
import util from "util";
import 'dotenv/config';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_PROD,
    password: process.env.CONTRASENASQL,
    database: process.env.DATABASESQL,
});

// Promisify para usar async/await con las consultas de MySQL
const query = util.promisify(pool.query).bind(pool);

export { query };
