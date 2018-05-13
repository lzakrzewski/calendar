import React, {Component} from 'react';
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
    getDay = (dayName) => {
        const day = _.find(this.props.days, { dayName });

        if (!day) {
            return null;
        }

        return day.day;
    };

    render() {
        return (

            <tr>
                <td>
                    {this.getDay(MONDAY)}
                </td>
                <td>
                    {this.getDay(TUESDAY)}
                </td>
                <td>
                    {this.getDay(WEDNESDAY)}
                </td>
                <td>
                    {this.getDay(THURSDAY)}
                </td>
                <td>
                    {this.getDay(FRIDAY)}
                </td>
                <td>
                    {this.getDay(SATURDAY)}
                </td>
                <td className="text-danger">
                    {this.getDay(SUNDAY)}
                </td>
            </tr>
        );
    }
}
