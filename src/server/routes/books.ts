import { Router, RequestHandler } from 'express';
import db from '../db';

let router = Router();

// const isAdmin: RequestHandler = (req, res, next) => {
//     if (!req.user || req.user.role !== 'admin') {
//         res.sendStatus(401);
//     } else {
//         return next();
//     }
// }

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        let [book]= await db.books.getOne(id)
        res.json(book)
    } else {
        let books = await db.books.getAll();
        res.json(books);
    }
});

router.post('/', async (req, res) => {
    try {
        let categoryid = req.body.categoryid;
        let author = req.body.author;
        let title = req.body.title;
        let price = req.body.price;
        let result: any = await db.books.newBook(author, title, price, categoryid);
        res.json(result);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let r = await db.books.deleteBook(req.params.id);
        res.json(r);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    try {
        let author = req.body.author;
        let title = req.body.title;
        let price = req.body.price;
        let categoryid = req.body.categoryid;
        let id = req.params.id;
        res.json(await db.books.updateBook(author, title, price, categoryid, id));
    } catch (error) {
        res.sendStatus(500);
    }
});

export default router;