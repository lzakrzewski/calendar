import * as calendar from './../src/calendar';
import moment from 'moment-immutable';

describe('calendar', () => {
    it('can return today\'s month moment representation', () => {
        const today = calendar.getTodaysMonth();

        expect(today).toEqual(
            moment().startOf('month')
        );
    });

    it('can get days of first week from January 2017', () => {
        const days = calendar.getDaysOfWeek(moment('2017-01-05'), 0);

        expect(days).toEqual(
            [
                {
                    "day": "1",
                    "dayName": "Sunday",
                    "week": 0
                }
            ]
        );
    });

    it('can get days of last week from February 2018', () => {
        const days = calendar.getDaysOfWeek(moment('2018-02-05'), 4);

        expect(days).toEqual(
            [
                {
                    "day": "26",
                    "dayName": "Monday",
                    "week": 4
                },
                {
                    "day": "27",
                    "dayName": "Tuesday",
                    "week": 4
                },
                {
                    "day": "28",
                    "dayName": "Wednesday",
                    "week": 4
                },
            ]
        );
    });

    it('can get days of first week from December 2019', () => {
        const days = calendar.getDaysOfWeek(moment('2019-12-05'), 0);

        expect(days).toEqual(
            [
                {
                    "day": "1",
                    "dayName": "Sunday",
                    "week": 0
                }
            ]
        );
    });


    it('can return empty for invalid week number', () => {
        const days = calendar.getDaysOfWeek(moment('2018-02-05'), 55);

        expect(days).toEqual(
            []
        );
    });

    it('can return empty for invalid date', () => {
        const days = calendar.getDaysOfWeek(moment('2018-02-55'), 4);

        expect(days).toEqual(
            []
        );
    });
});
