import React, {Component} from 'react';
import {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
    getDaysOfWeek
} from './../calendar';
import _ from 'lodash';

export default class Week extends Component {
    getDay = (days, dayName) => {
        const day = _.find(days, { dayName });

        if (!day) {
            return null;
        }

        return day.day;
    };

    render() {
        const days = getDaysOfWeek(this.props.currentMonth, this.props.week);

        return (

            <tr>
                <td>
                    {this.getDay(days, MONDAY)}
                </td>
                <td>
                    {this.getDay(days, TUESDAY)}
                </td>
                <td>
                    {this.getDay(days, WEDNESDAY)}
                </td>
                <td>
                    {this.getDay(days, THURSDAY)}
                </td>
                <td>
                    {this.getDay(days, FRIDAY)}
                </td>
                <td>
                    {this.getDay(days, SATURDAY)}
                </td>
                <td className="text-danger">
                    {this.getDay(days, SUNDAY)}
                </td>
            </tr>
        );
    }
}
