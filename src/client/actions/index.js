export const FETCH_EVENTS = 'fetch_events';
export const ADD_EVENT = 'add_event';
import axios from 'axios';
import { BASE_URL } from './../../../config/default';

export function fetchEvents(currentMonth) {
    const request = axios.get(`${BASE_URL}/events`, { params: { month: currentMonth.format('YYYY-MM-DD') }});

    return {
        type: FETCH_EVENTS,
        payload: request,
    };
}

export function addEvent(event, callback) {
    const request = axios.post(`${BASE_URL}/events`, event)
        .then(response => {
            callback();

            return response;
        });

    return {
        type: ADD_EVENT,
        payload: request,
    };
}
