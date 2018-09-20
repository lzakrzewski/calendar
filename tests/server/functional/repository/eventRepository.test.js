import * as eventRepository from '../../../../src/server/application/eventRepository';

describe('Add events', () => {
    beforeEach(async() => {
        const collection = await eventRepository.getEventsCollection();

        await collection.remove();
    });

    it('can return empty when no events in DB', async () => {
        const events = await eventRepository.fetchEvents('user-id', '2017-01-01');

        expect(events.length).toEqual(0);
    });

    it('can add and get events of given month from DB', async () => {
        const in1 = { id: 'in-1', start: '2017-01-02', end: '2017-01-03', userId: 'user-id' };
        const in2 = { id: 'in-2', start: '2017-01-01', end: '2017-01-04', userId: 'user-id' };
        const out1 = { id: 'out-1', start: '2017-01-02', end: '2017-01-03', userId: 'another-user' };
        const out2 = { id: 'out-2', start: '2017-02-01', end: '2017-02-02', userId: 'user-id' };
        const out3 = { id: 'out-3', start: '2018-01-01', end: '2018-01-02', userId: 'user-id' };

        await eventRepository.add(in1);
        await eventRepository.add(in2);
        await eventRepository.add(out1);
        await eventRepository.add(out2);
        await eventRepository.add(out3);

        const events = await eventRepository.fetchEvents('user-id', '2017-01-01');

        expect(events.length).toEqual(2);
        expect(in2).toEqual(events[0]);
        expect(in1).toEqual(events[1]);
    });

    it('knows if user has any events', async () => {
        await eventRepository.add({ id: 'in-1', start: '2017-01-02', end: '2017-01-03', userId: 'user-id' });

        expect(await eventRepository.hasEvents('user-id')).toBe(true);
    });

    it('knows if user does not have any events', async () => {
        expect(await eventRepository.hasEvents('user-id')).toBe(false);
    });
});
