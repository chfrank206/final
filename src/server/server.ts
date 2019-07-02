import * as path from 'path';
import * as express from 'express';
import apiRouter from './routes';
import * as  passport from 'passport';
import authRouter from './routes/auth'

import './middleware/bearerstrategy';
import './middleware/localstrategy';

const app = express();

let p = path.join(__dirname, '../public');

app.use(express.static(p));
app.use(express.json());
app.use(passport.initialize());
app.use('/api', apiRouter);
app.use('/auth', authRouter)

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});