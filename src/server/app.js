import express from 'express';
import uuid4 from 'uuid/v4';
import bodyParser from 'body-parser';
import * as eventRepository from "./application/eventRepository";
import { eventValidation } from './middleware/validationMiddleware';
import { userIdFromRequest } from './application/userIdReader';

const app = express();
app.use(bodyParser.json());

app.get('/events', async (request, response) => {
    return response.json(await eventRepository.fetchEvents(userIdFromRequest(request), request.query.month));
});

app.post('/events', eventValidation, async (request, response) => {
    const event = { ...request.body, userId: userIdFromRequest(request), id: uuid4()};
    await eventRepository.add(event);

    return response.status(201).json({eventId: event.id});
});

module.exports = app;