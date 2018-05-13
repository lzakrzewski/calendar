import * as calendar from './../src/calendar';

describe('calendar', () => {
    it('can get days of first week from January 2017', () => {
        const days = calendar.getDaysOfWeek(2017, 1, 1);

        expect(days).toEqual(
            [
                {
                    "day": "1",
                    "dayName": "Sunday",
                    "week": 1
                }
            ]
        );
    });

    it('can get days of last week from February 2018', () => {
        const days = calendar.getDaysOfWeek(2018, 2, 5);

        expect(days).toEqual(
            [
                {
                    "day": "26",
                    "dayName": "Monday",
                    "week": 5
                },
                {
                    "day": "27",
                    "dayName": "Tuesday",
                    "week": 5
                },
                {
                    "day": "28",
                    "dayName": "Wednesday",
                    "week": 5
                },
            ]
        );
    });

    it('can return empty for invalid week number', () => {
        const days = calendar.getDaysOfWeek(2018, 2, 55);

        expect(days).toEqual(
            []
        );
    });

    it('can return empty for invalid month number', () => {
        const days = calendar.getDaysOfWeek(2018, 20, 5);

        expect(days).toEqual(
            []
        );
    });
});
