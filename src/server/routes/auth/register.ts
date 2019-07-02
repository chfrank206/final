import * as express from 'express';

import db from '../../db';
import { HashPassword } from '../../utils/security/passwords';
import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let user = req.body;
        user.password = HashPassword(req.body.password);
        let data = Object.values(user);
        let result: any = await db.users.insertUser([user.email, user.name, user.password]);
        let token = await CreateToken({userid: result.insertId})
        res.json({
            token,
            role: 'admin',
            userid: result.insertId
        });
    } catch (error) {
        res.sendStatus(500);
    }
});

export default router;