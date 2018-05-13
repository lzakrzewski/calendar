export const FETCH_EVENTS = 'fetch_events';

export function fetchEvents() {
    return {
        type: FETCH_EVENTS,
        payload: {
            data: [
                {
                    id: 'event-id',
                    start: '2018-05-13T21:49:59.750Z',
                    event: "Learn reactJS"
                }
            ]
        }
    }
}
