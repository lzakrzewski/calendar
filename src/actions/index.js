export const FETCH_EVENTS = 'fetch_events';
import moment from 'moment-immutable';

const today = moment();
const tomorrow = moment().add(1, 'days');
const twoDaysAfter = moment().add(2, 'days');
const threeDaysAgo = moment().subtract(3, 'days');

export function fetchEvents() {
    const data = [
        {
            id: 'event-id-1',
            start: today.hour(10).toISOString(),
            event: "Quick event 1"
        },
        {
            id: 'event-id-2',
            start: threeDaysAgo.hour(7).toISOString(),
            event: "Quick event 2"
        },
        {
            id: 'event-id-3',
            start: today.hour(13).toISOString(),
            event: "One hour event"
        },
        {
            id: 'event-id-4',
            start: today.hour(11).toISOString(),
            end: today.hour(12).minutes(30).toISOString(),
            event: "One hour and half"
        },
        {
            id: 'event-id-5',
            start: twoDaysAfter.hour(15).toISOString(),
            end: twoDaysAfter.hour(18).toISOString(),
            event: "Three hours event"
        },
        {
            id: 'event-id-6',
            start: twoDaysAfter.hour(6).toISOString(),
            end: twoDaysAfter.hour(18).toISOString(),
            event: "Whole day event"
        },
        {
            id: 'event-id-7',
            start: tomorrow.hour(6).toISOString(),
            end: tomorrow.hour(12).toISOString(),
            event: "6 hours event"
        },
        {
            id: 'event-id-8',
            start: threeDaysAgo.hour(6).toISOString(),
            end: twoDaysAfter.hour(18).toISOString(),
            event: "Multiple days event"
        }
    ];

    return {
        type: FETCH_EVENTS,
        payload: { data }
    }
}
