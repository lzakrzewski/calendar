import express from 'express';

const app = express();

app.get('/events', (req, res) => {
    const response = [
            {
                id: 'event-id-1',
                start: '2017-01-01',
                end: '2017-01-02',
                event: "Quick event 1",
                allDay: false
            }
        ];

    res.json(response);
});

module.exports = app;