import express from 'express';
import uuid4 from 'uuid/v4';
import bodyParser from 'body-parser';
import * as eventRepository from "./application/eventRepository";

const app = express();
app.use(bodyParser.json());

app.get('/events', async (request, response) => {
    const userId = 'user-id';

    return response.json(await eventRepository.fetchEvents('user-id', '2017-01-01'));
});

app.post('/events', async (request, response) => {
    const userId = 'user-id';
    const event = request.body;

    if (!event.start || !event.event) {
        return response.status(400).json({error: 'Bad request'});
    }

    await eventRepository.add(event);

    return response.status(201).json({eventId: uuid4()});
});

module.exports = app;