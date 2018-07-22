import request from 'supertest';
import app from './../../src/server/app';

describe('GET /events', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/events')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});