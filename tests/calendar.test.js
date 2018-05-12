import * as calendar from './../src/calendar';

describe('calendar', () => {
    it('should array of days for given month', () => {
        const days = calendar.getDaysInWeek(2017, 1, 1);
        expect(days).toEqual([]);
    });
});
