export const FETCH_EVENTS = 'fetch_events';
export const ADD_EVENT = 'add_event';
import axios from 'axios';

const ROOT_URL = 'http://localhost:9001';

export function fetchEvents(currentMonth) {
    const request = axios.get(`${ROOT_URL}/events`, { params: { month: currentMonth.format('YYYY-MM-DD') }});

    return {
        type: FETCH_EVENTS,
        payload: request,
    };
}

export function addEvent(event, callback) {
    const request = axios.post(`${ROOT_URL}/events`, event)
        .then(response => {
            callback();

            return response;
        });

    return {
        type: ADD_EVENT,
        payload: request,
    };
}
