import * as mysql from 'mysql';

export const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: '1234',
    host: 'localhost',
    database: 'bookstore'
});

export default {

}