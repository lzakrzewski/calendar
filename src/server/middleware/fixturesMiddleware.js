import { userIdFromRequest } from './../application/userIdReader';
import * as eventRepository from './../application/eventRepository';
import moment from 'moment';
import uuid4 from 'uuid/v4';

const mockedEvents = () => {
    const today = moment();
    const tomorrow = moment().add(1, 'days');
    const twoDaysAfter = moment().add(2, 'days');
    const threeDaysAgo = moment().subtract(3, 'days');

    return [
        {
            id: uuid4(),
            start: moment(today).hour(10).minutes(10).toISOString(),
            end: moment(today).hour(10).minutes(10).toISOString(),
            event: "Quick event 1",
            allDay: false,
        },
        {
            id: uuid4(),
            start: moment(threeDaysAgo).hour(7).minutes(10).toISOString(),
            end: moment(threeDaysAgo).hour(7).minutes(10).toISOString(),
            event: "Quick event 2",
            allDay: false,
        },
        {
            id: uuid4(),
            start: moment(today).hour(13).minutes(10).toISOString(),
            end: moment(today).hour(14).minutes(10).toISOString(),
            event: "One hour event",
            allDay: false,
        },
        {
            id: uuid4(),
            start: moment(today).hour(11).minutes(10).toISOString(),
            end: moment(today).hour(12).minutes(30).toISOString(),
            event: "One hour and half",
            allDay: false,
        },
        {
            id: uuid4(),
            start: moment(twoDaysAfter).hour(15).minutes(10).toISOString(),
            end: moment(twoDaysAfter).hour(18).minutes(10).toISOString(),
            event: "Three hours event",
            allDay: false,
        },
        {
            id: uuid4(),
            start: moment(twoDaysAfter).hour(6).minutes(10).toISOString(),
            end: moment(twoDaysAfter).hour(18).minutes(10).toISOString(),
            event: "Whole day event",
            allDay: true,
        },
        {
            id: uuid4(),
            start: moment(tomorrow).hour(6).minutes(10).toISOString(),
            end: moment(tomorrow).hour(12).minutes(10).toISOString(),
            event: "6 hours event",
            allDay: false,
        },
        {
            id: uuid4(),
            start: moment(threeDaysAgo).hour(6).minutes(10).toISOString(),
            end: moment(twoDaysAfter).hour(18).minutes(10).toISOString(),
            event: "Multiple days event",
            allDay: true,
        },
        {
            id: uuid4(),
            start: moment(today).startOf('month').add(2, 'day').hour(6).minutes(10).toISOString(),
            end: moment(today).startOf('month').add(12, 'day').hour(16).minutes(10).toISOString(),
            event: "More than one week event",
            allDay: true,
        },
        {
            id: uuid4(),
            start: moment(today).startOf('month').add(10, 'day').hour(6).minutes(10).toISOString(),
            end: moment(today).startOf('month').add(12, 'day').hour(16).minutes(10).toISOString(),
            event: "3 days event",
            allDay: true,
        },
        {
            id: uuid4(),
            start: moment(today).startOf('month').add(12, 'day').hour(1).minutes(10).toISOString(),
            end: moment(today).startOf('month').add(12, 'day').hour(1).minutes(10).toISOString(),
            event: "Day event",
            allDay: true,
        }
    ];
};

const addFixtureEvents = async(userId) => {
    const promises = mockedEvents()
        .map((event) => {
            return eventRepository.add({...event, userId });
        });

    await Promise.all(promises);
};

export const loadFixtures = async(request, response, next) => {
    const userId    = userIdFromRequest(request);
    const hasEvents = await eventRepository.hasEvents(userId);

    if (!hasEvents) {
        await addFixtureEvents(userId)
    }

    next();
};
