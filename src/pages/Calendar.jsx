import React, {Component} from 'react';
import Month from "../components/Month";
import { getTodaysMonth } from '../calendar';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions';

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = { currentMonth: getTodaysMonth() };
    }

    componentDidMount = () => {
        this.fetchEvents();
    }

    handlePrev = () => {
        this.setState({ currentMonth: this.state.currentMonth.subtract(1, 'month') }, this.fetchEvents);
    };

    handleToday = () => {
        this.setState({ currentMonth: getTodaysMonth() }, this.fetchEvents);
    };

    handleNext = () => {
        this.setState({ currentMonth: this.state.currentMonth.add(1, 'month') }, this.fetchEvents);
    };

    fetchEvents = () => {
        this.props.fetchEvents(this.state.currentMonth);
    };

    getCurrentDate = () => {
        return this.state.currentMonth.format('MMMM YYYY');
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-light bg-light justify-content-between" aria-label="Calendar navigation">
                            <ul style={{marginBottom: 0}} className="pagination pagination-lg">
                                <li className="page-item">
                                    <a
                                        className="page-link prev-month"
                                        href="#"
                                        onClick={this.handlePrev}
                                    >
                                        ⇐ Previous
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a
                                        className="page-link"
                                        href="#"
                                        onClick={this.handleToday}
                                    >
                                        Today
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link next-month"
                                        href="#"
                                        onClick={this.handleNext}
                                    >
                                        Next ⇒
                                    </a>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                <h2>
                                    {this.getCurrentDate()}
                                </h2>
                            </span>
                        </nav>
                    </div>
                </div>
                <Month currentMonth={ this.state.currentMonth } events={ this.props.events } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { events: state.events };
}

export default connect(mapStateToProps, { fetchEvents })(Calendar);