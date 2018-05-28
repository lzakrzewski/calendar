import React, {Component} from 'react';
import * as events from '../events';
import { getDaysDiffInWeek } from '../calendar';
import _ from 'lodash';
import moment from 'moment-immutable';
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
                                        className={`badge duration-${getDaysDiffInWeek(this.props.day, event.end)} badge-${this.getEventColor(event, this.props.events)}`}
                                        key={event.id}
                                    >
                                        <span>{ event.event }</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                { dayEvents.length > 0 &&
                    <ul className="list-unstyled events day-events">
                        { _.map(
                            dayEvents,
                            (event) => {
                                return (
                                    <li
                                        className={`${this.getEventColor(event, this.props.events)}`}
                                        key={event.id}
                                    >
                                        <span className="dot" />
                                        <span className="start">{moment(event.start).format('hh:mm')}</span>
                                        <span>{ event.event }</span>
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
