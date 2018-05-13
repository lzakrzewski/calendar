import React, {Component} from 'react';
import Week from "./Week";
import * as calendar from './../calendar';

export default class Month extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th style={{ width: "14.29%" }}>
                                    Monday
                                </th>
                                <th style={{ width: "14.29%" }}>
                                    Tuesday
                                </th>
                                <th style={{ width: "14.29%" }}>
                                    Wednesday
                                </th>
                                <th style={{ width: "14.29%" }}>
                                    Thursday
                                </th>
                                <th style={{ width: "14.29%" }}>
                                    Friday
                                </th>
                                <th style={{ width: "14.29%" }}>
                                    Saturday
                                </th>
                                <th style={{ width: "14.29%" }}>
                                    Sunday
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <Week days={calendar.getDaysOfWeek(this.props.year, this.props.month, 1)} />
                            <Week days={calendar.getDaysOfWeek(this.props.year, this.props.month, 2)} />
                            <Week days={calendar.getDaysOfWeek(this.props.year, this.props.month, 3)} />
                            <Week days={calendar.getDaysOfWeek(this.props.year, this.props.month, 4)} />
                            <Week days={calendar.getDaysOfWeek(this.props.year, this.props.month, 5)} />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
