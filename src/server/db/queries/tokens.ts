import { Query } from '../index';

const findOneToken = async (id: number, token: string) => Query(`select * from Tokens where id = ${id} and token = '${token}'`);

const insertToken = async (userid: number) => Query(`insert into Tokens (userid) values (${userid})`);

const updateToken = async (id: number, token: string) => Query(`update Tokens set token = '${token}' where id = ${id}`);

export default {
    findOneToken,
    insertToken,
    updateToken
}