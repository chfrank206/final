import { Query } from '../index';

const getAll = () => Query(`select * from books`);

export default {
    getAll
}