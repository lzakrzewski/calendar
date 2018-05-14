import moment from 'moment-immutable';
import _ from 'lodash';

export const MONDAY = 'Monday';
export const TUESDAY = 'Tuesday';
export const WEDNESDAY = 'Wednesday';
export const THURSDAY = 'Thursday';
export const FRIDAY = 'Friday';
export const SATURDAY = 'Saturday';
export const SUNDAY = 'Sunday';

export const ALL_WEEK_DAYS = [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY];

export const getDaysOfWeek = (date, week) => {
    return _.filter(getDaysOfMonth(date), { week });
};

export const getTodaysMonth = () => {
    return moment().startOf('month');
};

const getDaysOfMonth = (date) => {
    const currentMonth = moment(date).startOf('month');

    return _.times(
        currentMonth.daysInMonth(),
        (dayInMonth) => {
            const day = currentMonth.add(dayInMonth, 'day');

            return {
                'dayName': day.format('dddd'),
                'day': day.format('D'),
                'date': day.format('YYYY-MM-DD'),
                'week': weekOfMonth(day)
            };
        }
    );
};

const weekOfMonth = (date) => {
    return date.isoWeek() - date.startOf('month').isoWeek();
};