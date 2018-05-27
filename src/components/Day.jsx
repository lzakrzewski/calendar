import React, {Component} from 'react';
import * as events from '../events';
import _ from 'lodash';
import './Day.css';

export default class Day extends Component {
    getEventColor = (event, events) => {
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

        const index = _.indexOf(_.values(events), event);

        return colors[index % 7];
    };

    render() {
        if (!this.props.day) {
            return <div className="Day" />
        }

        const allDayEvents = events.allDayEvents(this.props.day, this.props.events);
        const dayEvents = events.dayEvents(this.props.day, this.props.events);

        return (
            <div className="Day">
                <div className="day">
                    {this.props.day.format('D')}
                </div>
                { allDayEvents.length > 0 &&
                    <ul className="list-inline events all-day-events ">
                        { _.map(
                            allDayEvents,
                            (event) => {
                                return (
                                    <li
                                        className={`badge badge-${this.getEventColor(event, this.props.events)}`}
                                        key={event.id}
                                    >
                                        { event.event }
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                { dayEvents.length > 0 &&
                    <ul className="list-inline events day-events">
                        { _.map(
                            dayEvents,
                            (event) => {
                                return (
                                    <li
                                        className={`badge badge-${this.getEventColor(event, this.props.events)}`}
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
