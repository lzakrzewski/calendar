import React, {Component} from 'react';
import Week from './../components/Week';
import _ from 'lodash';

class Calendar extends Component {
    render() {
        const daysInMonth = _.range(1, 30);

        return (
            <table className="table-bordered">
                <thead>
                    <tr>
                        <th>
                            Monday
                        </th>
                        <th>
                            Tuesday
                        </th>
                        <th>
                            Wednesday
                        </th>
                        <th>
                            Thursday
                        </th>
                        <th>
                            Friday
                        </th>
                        <th>
                            Saturday
                        </th>
                        <th>
                            Sunday
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <Week daysInWeek={_.slice(daysInMonth, 0, 7)} />
                    <Week daysInWeek={_.slice(daysInMonth, 7, 14)} />
                    <Week daysInWeek={_.slice(daysInMonth, 14, 21)} />
                    <Week daysInWeek={_.slice(daysInMonth, 21, 28)} />
                    <Week daysInWeek={_.slice(daysInMonth, 28, 35)} />
                </tbody>
            </table>
        );
    }
}

export default Calendar;