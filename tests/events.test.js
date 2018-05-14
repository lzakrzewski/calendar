import { dateEvents } from './../src/events';
import moment from 'moment-immutable';

describe('events', () => {
    it('can extract current day events from monthly events', () => {
        const events = {
            'event-in-1': {
                id: 'event-in-1',
                date: '2017-01-01'
            },
            'event-in-2': {
                id: 'event-in-2',
                date: '2017-01-01 00:54:33'
            },
            'event-out': {
                id: 'event-out',
                date: '2017-03-01'
            },
        };

        expect(dateEvents(moment('2017-01-01 04:32:01'), events)).toEqual(
            [
                {
                    id: 'event-in-1',
                    date: '2017-01-01'
                },
                {
                    id: 'event-in-2',
                    date: '2017-01-01 00:54:33'
                },
            ]
        );
    });

    it('returns empty when no events for given date', () => {
        const events = {
            'event-1': {
                id: 'event-1',
                date: '2017-01-01'
            },
            'event-2': {
                id: 'event-3',
                date: '2017-01-01 00:54:33'
            },
            'event-3': {
                id: 'event-3',
                date: '2017-01-01'
            },
        };

        expect(dateEvents(moment('2018-01-01 04:32:01'), events)).toEqual([]);
    });

    it('returns empty when no events', () => {
        expect(dateEvents(moment('2018-01-01 04:32:01'), {})).toEqual([]);
    });
});
