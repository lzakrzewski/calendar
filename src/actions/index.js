export const FETCH_EVENTS = 'fetch_events';
import moment from 'moment-immutable';

const today = moment();
const tomorrow = moment().add(1, 'days');
const twoDaysAfter = moment().add(2, 'days');
const threeDaysAgo = moment().subtract(3, 'days');

export function fetchEvents(currentMonth) {
    const data = getMockedEvents(currentMonth);

    return {
        type: FETCH_EVENTS,
        payload: { data },
    };
}

function getMockedEvents(currentMonth) {
    if (!currentMonth) {
        return [];
    }

    const month = moment(currentMonth).startOf('month');

    if (!moment().startOf('month').isSame(month)) {
        return [];
    }

    return [
        {
            id: 'event-id-1',
            start: today.hour(10).minutes(10).toISOString(),
            end: today.hour(10).minutes(10).toISOString(),
            event: "Quick event 1",
            allDay: false,
        },
        {
            id: 'event-id-2',
            start: threeDaysAgo.hour(7).minutes(10).toISOString(),
            end: threeDaysAgo.hour(7).minutes(10).toISOString(),
            event: "Quick event 2",
            allDay: false,
        },
        {
            id: 'event-id-3',
            start: today.hour(13).minutes(10).toISOString(),
            end: today.hour(14).minutes(10).toISOString(),
            event: "One hour event",
            allDay: false,
        },
        {
            id: 'event-id-4',
            start: today.hour(11).minutes(10).toISOString(),
            end: today.hour(12).minutes(30).toISOString(),
            event: "One hour and half",
            allDay: false,
        },
        {
            id: 'event-id-5',
            start: twoDaysAfter.hour(15).minutes(10).toISOString(),
            end: twoDaysAfter.hour(18).minutes(10).toISOString(),
            event: "Three hours event",
            allDay: false,
        },
        {
            id: 'event-id-6',
            start: twoDaysAfter.hour(6).minutes(10).toISOString(),
            end: twoDaysAfter.hour(18).minutes(10).toISOString(),
            event: "Whole day event",
            allDay: true,
        },
        {
            id: 'event-id-7',
            start: tomorrow.hour(6).minutes(10).toISOString(),
            end: tomorrow.hour(12).minutes(10).toISOString(),
            event: "6 hours event",
            allDay: false,
        },
        {
            id: 'event-id-8',
            start: threeDaysAgo.hour(6).minutes(10).toISOString(),
            end: twoDaysAfter.hour(18).minutes(10).toISOString(),
            event: "Multiple days event",
            allDay: true,
        },
        {
            id: 'event-id-9',
            start: today.startOf('month').add(2, 'day').hour(6).minutes(10).toISOString(),
            end: today.startOf('month').add(12, 'day').hour(16).minutes(10).toISOString(),
            event: "More than one week event",
            allDay: true,
        },
        {
            id: 'event-id-10',
            start: today.startOf('month').add(10, 'day').hour(6).minutes(10).toISOString(),
            end: today.startOf('month').add(12, 'day').hour(16).minutes(10).toISOString(),
            event: "3 days event",
            allDay: true,
        },
        {
            id: 'event-id-11',
            start: today.startOf('month').add(12, 'day').hour(1).minutes(10).toISOString(),
            end: today.startOf('month').add(12, 'day').hour(1).minutes(10).toISOString(),
            event: "Day event",
            allDay: true,
        }
    ];
}