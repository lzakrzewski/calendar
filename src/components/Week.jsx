import React, {Component} from 'react';

export default class Week extends Component {
    daysInWeek() {
        return this.props.daysInWeek.map(
            (day) => <td key={day.toString()}>{day}</td>
        );
    }

    render() {
        return (
            <tr>
                {this.daysInWeek()}
            </tr>
        );
    }
}
