import React, {Component} from 'react';
import { dateEvents } from '../events';
import _ from 'lodash';
import './Day.css';

export default class Day extends Component {
    getEventColor = (index) => {
        const colors = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ];

        return colors[index % 7];
    };

    render() {
        if (!this.props.day) {
            return <div className="Day" />
        }

        const events = dateEvents(this.props.day, this.props.events);

        return (
            <div className="Day">
                <div className="day">
                    {this.props.day.format('D')}
                </div>
                {events.length > 0 &&
                    <ul className="list-inline events">
                        { _.map(
                            dateEvents(this.props.day, this.props.events),
                            (event, index) => {
                                return (
                                    <li
                                        className={`badge badge-${this.getEventColor(index)}`}
                                        key={event.id}
                                    >
                                        { event.event }
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        );
    }
}
