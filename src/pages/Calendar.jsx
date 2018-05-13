import React, {Component} from 'react';
import Month from "../components/Month";

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.year = 2017;
        this.month = 2;
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-light bg-light justify-content-between" aria-label="Calendar navigation">
                            <ul style={{marginBottom: 0}} className="pagination pagination-lg">
                                <li className="page-item">
                                    <a className="page-link" href="#">⇐ Previous</a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">Today</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next ⇒</a>
                                </li>
                            </ul>
                            <span class="navbar-text">
                                <h2>
                                    May 2017
                                </h2>
                            </span>
                        </nav>
                    </div>

                </div>
                <Month year={this.year} month={this.month} />
            </div>
        );
    }
}

export default Calendar;