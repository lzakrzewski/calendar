import express from 'express';
import uuid4 from 'uuid/v4';
import bodyParser from 'body-parser';
import { getEventsOfUser } from './application/eventRepository';

const app = express();
app.use(bodyParser.json());

app.get('/events', (request, response) => {
    const userId = request.query.userId;

    if (userId === 'unknown') {
        return response.status(403).json({error: 'Bad credentials.'});
    }

    getEventsOfUser('user id')

    return response.json([
        {
            id: 'event-id-1',
            start: '2017-01-01',
            end: '2017-01-02',
            event: "Quick event 1",
            allDay: false
        },
        {
            id: 'event-id-2',
            start: '2017-01-01',
            end: '2017-01-02',
            event: "Quick event 2",
            allDay: true
        }
    ]);
});

app.post('/events', (request, response) => {
    const userId = request.query.userId;
    const event = request.body;

    if (userId === 'unknown') {
        return response.status(403).json({error: 'Bad credentials.'});
    }

    if (!event.start || !event.event) {
        return response.status(400).json({error: 'Bad request'});
    }

    return response.status(201).json({eventId: uuid4()});
});

app.post('/users', (request, response) => {
    return response.status(201).json({userId: uuid4()});
});

module.exports = app;