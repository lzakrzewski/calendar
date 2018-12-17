import express from 'express';
import path from 'path';
import uuid4 from 'uuid/v4';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as eventRepository from './application/eventRepository';
import { eventValidation } from './middleware/validationMiddleware';
import { loadFixtures } from './middleware/fixturesMiddleware';
import { userIdFromRequest } from './application/userIdReader';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(loadFixtures);
app.disable('etag');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../index.html'));
});

app.get('/bundle.js', (req, res) => {
    console.log('putas')
    res.sendFile(path.join(__dirname + '/../../bundle.js'));
});

app.get('/events', async (request, response) => {
    return response.json(await eventRepository.fetchEvents(userIdFromRequest(request), request.query.month));
});

app.post('/events', eventValidation, async (request, response) => {
    const event = { ...request.body, userId: userIdFromRequest(request), id: uuid4()};
    await eventRepository.add(event);

    return response.status(201).json(event);
});

module.exports = app;