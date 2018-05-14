import moment from 'moment-immutable';
import _ from 'lodash';

export const dateEvents = (date, events) => {
    const day = moment(date).startOf('day');

    return _.filter(
        events,
        (event) => moment(event.date).startOf('day').isSame(day)
    );
};
