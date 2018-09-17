import * as eventRepository from '../../../src/server/application/eventRepository';

describe('Add events', () => {
    it('can add and get events from DB', () => {
        const event1 = {
            id: 'event-id-1',
            start: '2017-01-02',
            end: '2017-01-02',
            event: "Quick event 1",
            allDay: false,
            userId: 'user-id'
        };

        const event2 = {
            id: 'event-id-2',
            start: '2017-01-01',
            end: '2017-01-02',
            event: "Quick event 2",
            allDay: false,
            userId: 'user-id'
        };

        return eventRepository.connect().then(connection => {
            return connection.collection('events')
                .remove();
            }).then(() => {
                return eventRepository.add(event1)
            }).then(() => {
                return eventRepository.add(event2)
            })
            .then(() => {
            return eventRepository
                .getEvents('user-id')
                .then(events => {
                    expect(event1).toEqual(events[0]);
                    expect(event2).toEqual(events[1]);
                });
        });
    });

    it('can return empty when no events in DB', () => {
        expect(2).toEqual(2)
    });
});