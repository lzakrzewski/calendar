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
                <Month year={this.year} month={this.month} />
            </div>
        );
    }
}

export default Calendar;