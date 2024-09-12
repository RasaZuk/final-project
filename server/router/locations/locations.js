import connection from '../../db';
import express from 'express';

export const locationsAPIrouter = express.Router();

locationsAPIrouter.get('/', getLocations);

async function getLocations(req, res) {
    const data = [
        {
            img: '/',
            name: 'Menulis',
            address: {
                country: 'Kosmosas',
                city: 'A',
                street: 'A',
                number: 'A',
                zip: 'A',
            },
        },
        {
            img: '/',
            name: 'Gelyte',
            address: {
                country: 'Tundra',
                city: 'B',
                street: 'B',
                number: 'B',
                zip: 'B',
            },
        },
        {
            img: '/',
            name: '',
            address: {
                country: 'Jura',
                city: 'C',
                street: 'C',
                number: 'C',
                zip: 'C',
            },
        },
    ];

    const sql = 'SELECT * FROM locations;';
    const dataFromServer = await connection.execute();

    console.log(dataFromServer);

    return res.json({
        status: 'success',
        data: data,
    });
};