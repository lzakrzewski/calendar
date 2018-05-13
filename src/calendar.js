import moment from 'moment-immutable';
import _ from 'lodash';

export const MONDAY = 'Monday';
export const TUESDAY = 'Tuesday';
export const WEDNESDAY = 'Wednesday';
export const THURSDAY = 'Thursday';
export const FRIDAY = 'Friday';
export const SATURDAY = 'Saturday';
export const SUNDAY = 'Sunday';

export const getDaysOfWeek = (year, month, week) => {
    return _.filter(getDaysOfMonth(year, month), { 'week': week });
};

const getDaysOfMonth = (year, month) => {
    month = month - 1;
    const lastDay = moment([year, month]).endOf('month');

    let day = moment([year, month]).startOf('month');
    let days = [];

    while (day.dayOfYear() <= lastDay.dayOfYear()) {
        days.push({
            'dayName': day.format('dddd'),
            'day': day.format('D'),
            'week': weekOfMonth(day)
        });

        day = day.add(1, 'day')
    }

    return days;
};

const weekOfMonth = (date) => {
    return date.isoWeek() - date.startOf('month').isoWeek() + 1;
}