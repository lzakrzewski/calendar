export const FETCH_EVENTS = 'fetch_events';
export const ADD_EVENT = 'add_event';
import moment from 'moment';

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

export function addEvent(event) {
    return {
        type: ADD_EVENT,
        payload: { event },
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
            start: moment(today).hour(10).minutes(10).toISOString(),
            end: moment(today).hour(10).minutes(10).toISOString(),
            event: "Quick event 1",
            allDay: false,
        },
        {
            id: 'event-id-2',
            start: moment(threeDaysAgo).hour(7).minutes(10).toISOString(),
            end: moment(threeDaysAgo).hour(7).minutes(10).toISOString(),
            event: "Quick event 2",
            allDay: false,
        },
        {
            id: 'event-id-3',
            start: moment(today).hour(13).minutes(10).toISOString(),
            end: moment(today).hour(14).minutes(10).toISOString(),
            event: "One hour event",
            allDay: false,
        },
        {
            id: 'event-id-4',
            start: moment(today).hour(11).minutes(10).toISOString(),
            end: moment(today).hour(12).minutes(30).toISOString(),
            event: "One hour and half",
            allDay: false,
        },
        {
            id: 'event-id-5',
            start: moment(twoDaysAfter).hour(15).minutes(10).toISOString(),
            end: moment(twoDaysAfter).hour(18).minutes(10).toISOString(),
            event: "Three hours event",
            allDay: false,
        },
        {
            id: 'event-id-6',
            start: moment(twoDaysAfter).hour(6).minutes(10).toISOString(),
            end: moment(twoDaysAfter).hour(18).minutes(10).toISOString(),
            event: "Whole day event",
            allDay: true,
        },
        {
            id: 'event-id-7',
            start: moment(tomorrow).hour(6).minutes(10).toISOString(),
            end: moment(tomorrow).hour(12).minutes(10).toISOString(),
            event: "6 hours event",
            allDay: false,
        },
        {
            id: 'event-id-8',
            start: moment(threeDaysAgo).hour(6).minutes(10).toISOString(),
            end: moment(twoDaysAfter).hour(18).minutes(10).toISOString(),
            event: "Multiple days event",
            allDay: true,
        },
        {
            id: 'event-id-9',
            start: moment(today).startOf('month').add(2, 'day').hour(6).minutes(10).toISOString(),
            end: moment(today).startOf('month').add(12, 'day').hour(16).minutes(10).toISOString(),
            event: "More than one week event",
            allDay: true,
        },
        {
            id: 'event-id-10',
            start: moment(today).startOf('month').add(10, 'day').hour(6).minutes(10).toISOString(),
            end: moment(today).startOf('month').add(12, 'day').hour(16).minutes(10).toISOString(),
            event: "3 days event",
            allDay: true,
        },
        {
            id: 'event-id-11',
            start: moment(today).startOf('month').add(12, 'day').hour(1).minutes(10).toISOString(),
            end: moment(today).startOf('month').add(12, 'day').hour(1).minutes(10).toISOString(),
            event: "Day event",
            allDay: true,
        }
    ];
}