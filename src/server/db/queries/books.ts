import { Query } from '../index';

const getAll = () => Query(`select * from books`);

const getOne = (id: number) => Query(`select b.*, c.name from books b join categories c on c.id = b.categoryid where b.id = ?`, [id]);

export default {
    getAll,
    getOne
}