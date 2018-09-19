import express from 'express';
import uuid4 from 'uuid/v4';
import bodyParser from 'body-parser';
import * as eventRepository from "./application/eventRepository";
import { eventValidation } from './middleware/validationMiddleware';

const app = express();
app.use(bodyParser.json());

app.get('/events', async (request, response) => {
    const userId = 'user-id';

    return response.json(await eventRepository.fetchEvents('user-id', '2017-01-01'));
});

app.post('/events', eventValidation, async (request, response) => {
    const userId = 'user-id';
    const event = { ...event, userId: userId, id: uuid4()};

    await eventRepository.add(event);

    return response.status(201).json({eventId: event.id});
});

module.exports = app;