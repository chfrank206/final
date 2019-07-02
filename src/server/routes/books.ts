import { Router, RequestHandler } from 'express';
import db from '../db';

let router = Router();

const isAdmin: RequestHandler = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        res.sendStatus(401);
    } else {
        return next();
    }
}

router.get('/:id?', async (req, res) => {
    let books = await db.books.getAll()
})

export default router;