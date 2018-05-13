import moment from 'moment-immutable';
import _ from 'lodash';

export const MONDAY = 'Monday';
export const TUESDAY = 'Tuesday';
export const WEDNESDAY = 'Wednesday';
export const THURSDAY = 'Thursday';
export const FRIDAY = 'Friday';
export const SATURDAY = 'Saturday';
export const SUNDAY = 'Sunday';

export const getDaysOfWeek = (month, week) => {
    return _.filter(getDaysOfMonth(month), { 'week': week });
};

export const getTodaysMonth = () => {
    return moment().startOf('month');
}

const getDaysOfMonth = (currentMonth) => {
    currentMonth = moment(currentMonth).startOf('month');

    return _.times(
        currentMonth.daysInMonth(),
        (dayInMonth) => {
            const day = currentMonth.add(dayInMonth, 'day');

            return {
                'dayName': day.format('dddd'),
                'day': day.format('D'),
                'week': weekOfMonth(day)
            };
        }
    );
};

const weekOfMonth = (date) => {
    return date.isoWeek() - date.startOf('month').isoWeek();
}