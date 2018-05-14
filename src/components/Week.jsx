import React, {Component} from 'react';
import {
    ALL_WEEK_DAYS,
    SUNDAY,
    getDaysOfWeek
} from './../calendar';
import _ from 'lodash';
import Day from "./Day";
import moment from 'moment-immutable';

export default class Week extends Component {
    render() {
        const days = getDaysOfWeek(this.props.currentMonth, this.props.week);

        return (
            <tr>
                { _.map(
                    ALL_WEEK_DAYS,
                    (dayName) => {
                        const day = _.find(days, {dayName});

                        return (
                            <td key={dayName} className={(dayName === SUNDAY) ? 'text-danger' : ''}>
                                <Day
                                    day={day ? moment(day) : null }
                                    events={this.props.events}
                                />
                            </td>
                        )
                    })
                }
            </tr>
        );
    }
}
