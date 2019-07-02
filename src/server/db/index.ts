import * as mysql from 'mysql';
import books from './queries/books';

export const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: '1234',
    host: 'localhost',
    database: 'bookstore'
});

export const Query = (query: string, values?: any) => {
    return new Promise<Array<any>>((resolve, reject) => {
        pool.query(query, [values], (err, results) => {
            if(err) reject(err);
            resolve(results);
        })
    })
};

export default {
    books
}