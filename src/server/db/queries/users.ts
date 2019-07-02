import { Query } from '../index';

const insertUser = async (user: any) => Query(`insert into Users (email, name, password) values ?`, [user]);

const findOneByEmail = async (email: string) => Query(`select * from Users where email = '${email}' limit 1`);

const findOneById = async (id: number) => Query(`select * from Users where id = ${id} limit 1`);

export default {
    insertUser,
    findOneByEmail,
    findOneById
}