import React, {Component} from 'react';
import Week from "./Week";

export default class Month extends Component {
    render() {
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
                    <Week year={ this.props.year } month={ this.props.month } week={1} />
                    <Week year={ this.props.year } month={ this.props.month } week={2} />
                    <Week year={ this.props.year } month={ this.props.month } week={3} />
                    <Week year={ this.props.year } month={ this.props.month } week={4} />
                    <Week year={ this.props.year } month={ this.props.month } week={5} />
                </tbody>
            </table>
        );
    }
}
