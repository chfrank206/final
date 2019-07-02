import { Query } from '../index';

const getAll = () => Query(`select * from books`);

const getOne = (id: number) => Query(`select b.*, c.name from books b join categories c on c.id = b.categoryid where b.id = ?`, [id]);

const newBook = (author: string, title:string, price: number, categoryid: number) => Query(`insert into Books (author, title, price, categoryid) values (?)`, [author, title, price, categoryid]);

const getAllCategories = () => Query(`select * from categories`);

const getBookCategory = (id: number) => Query(`select Books.*, Categories.name from Books join Categories on Books.categoryid = Categories.id where Books.categoryid = ${id}`);

const deleteBook = (id: number) => Query(`delete from Books where id = ?`, [id]);

const updateBook = (author: string, title: string, price: string, categoryid: number, id: number) => Query(`update Books set autor= "${author}", title ="${title}", price = "${price}", categoryid = ${categoryid} where id = '${id}'`);

export default {
    getAll,
    getOne,
    newBook,
    getAllCategories,
    getBookCategory,
    deleteBook,
    updateBook
}