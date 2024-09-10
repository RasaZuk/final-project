import express from 'express';

export const apiRouter = express.Router();

apiRouter.all('/', (req, res) => {
    return res.json({
        status: 'Error',
        msg: 'Isssirink konkretu API endpointa',
    });
});