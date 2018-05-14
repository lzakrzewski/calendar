import React, {Component} from 'react';
import { dateEvents } from '../events';
import _ from 'lodash';

export default class Day extends Component {
    render() {
        if (!this.props.day) {
            return ''
        }

        const events = dateEvents(this.props.day, this.props.events);

        return (
            <div>
                {this.props.day.format('D')}
                {events.length > 0 &&
                    <ul>
                        { _.map(
                            dateEvents(this.props.day, this.props.events),
                            (event) => {
                                return (
                                    <li key={event.id}>{ event.event }</li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        );
    }
}
