import React, {Component} from 'react';
import Week from "./Week";

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
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={0}
                            />
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={1}
                            />
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={2}
                            />
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={3}
                            />
                            <Week
                                events={this.props.events}
                                currentMonth={this.props.currentMonth}
                                week={4}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
