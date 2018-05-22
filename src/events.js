import moment from 'moment-immutable';
import _ from 'lodash';

export const dateEvents = (date, events) => {
    const day = moment(date).startOf('day');

    return _.orderBy(
        _.filter(events, (event) => moment(event.start).startOf('day').isSame(day)),
        ['start'],
        ['asc']
    );
};