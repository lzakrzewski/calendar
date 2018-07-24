import request from 'supertest';
import app from './../../src/server/app';

describe('Get events', () => {
    it('can get events for given user', () => {
        return request(app)
            .get('/events?userId=user123')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body.length).toEqual(2)
            })
    });

    it('can not get events for unauthorized user', () => {
        return request(app)
            .get('/events?userId=unknown')
            .set('Accept', 'application/json')
            .expect(403);
    });
});

describe('Add events', () => {
    it('can add event for given user', () => {
        return request(app)
            .post('/events?userId=user123')
            .send({
                start: '2017-01-01',
                end: '2017-01-02',
                event: "Quick event 1",
                allDay: false,
            })
            .set('Accept', 'application/json')
            .expect(201)
            .then(response => {
                expect(response.body.eventId.length).toEqual(36)
            })
    });

    it('can not add events for unauthorized user', () => {
        return request(app)
            .post('/events?userId=unknown')
            .set('Accept', 'application/json')
            .expect(403);
    });

    it('can not add event with invalid input', () => {
        return request(app)
            .post('/events?userId=user123')
            .send('name=john')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400);
    });
});

describe('User', () => {
    it('can get userId', () => {
        return request(app)
            .post('/users')
            .set('Accept', 'application/json')
            .expect(201)
            .then(response => {
                expect(response.body.userId.length).toEqual(36)
            })
    });
});