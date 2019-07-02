import { Router } from 'express';
import db from '../db';

let router = Router();

router.get('/:id?', async (req, res) => {
    try {
        let categories = await db.books.getAllCategories();
        res.json(categories);
    } catch (error) {
        res.sendStatus(500)
    }
})

export default router;