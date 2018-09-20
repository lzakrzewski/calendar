import request from 'supertest';
import app from '../../../src/server/app';
import * as eventRepository from '../../../src/server/application/eventRepository';
jest.mock('../../../src/server/application/eventRepository');

describe('Get events', () => {
    beforeEach(() => {
        eventRepository.fetchEvents.mockImplementation(async () => {
            return [{id: 'event1'}, {id: 'event2'}];
        });
    });

    it('can get events for given user', async () => {
        const response = await request(app)
            .get('/events')
            .set('Accept', 'application/json');

        expect(response.statusCode).toEqual(200);
        expect(response.body.length).toEqual(2);
    });
});

describe('Add events', () => {
    it('can add event for given user', async() => {
        const response = await request(app)
            .post('/events')
            .send({
                start: '2017-01-01',
                end: '2017-01-02',
                event: "Quick event 1",
                allDay: false,
            })
            .set('Accept', 'application/json');

        const addedEvent = eventRepository.add.mock.calls[0][0];

        expect(response.statusCode).toEqual(201);
        expect(response.body.eventId.length).toEqual(36);

        expect(addedEvent.start).toEqual('2017-01-01');
        expect(addedEvent.end).toEqual('2017-01-02');
        expect(addedEvent.event).toEqual('Quick event 1');
        expect(addedEvent.allDay).toEqual(false);
        expect(addedEvent.id.length).toEqual(36);
        expect(addedEvent.userId.length).toEqual(32);
    });

    it('can not add event with invalid input', async() => {
        const response = await request(app)
            .post('/events')
            .send('name=john')
            .set('Accept', 'application/json');

        expect(response.statusCode).toEqual(400);
    });
});
