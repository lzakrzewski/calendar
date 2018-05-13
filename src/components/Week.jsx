import React, {Component} from 'react';
import * as calendar from './../calendar';
import {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
} from './../calendar';
import _ from 'lodash';

export default class Week extends Component {
    getDay = (dayName, days) => {
        const day = _.find(days, { dayName });

        if (!day) {
            return null;
        }

        return day.day;
    }

    render() {
        const days = calendar.getDaysOfWeek(this.props.year, this.props.month, this.props.week);

        return (

            <tr>
                <td>
                    {this.getDay(MONDAY, days)}
                </td>
                <td>
                    {this.getDay(TUESDAY, days)}
                </td>
                <td>
                    {this.getDay(WEDNESDAY, days)}
                </td>
                <td>
                    {this.getDay(THURSDAY, days)}
                </td>
                <td>
                    {this.getDay(FRIDAY, days)}
                </td>
                <td>
                    {this.getDay(SATURDAY, days)}
                </td>
                <td>
                    {this.getDay(SUNDAY, days)}
                </td>
            </tr>
        );
    }
}
