import React, {Component} from "react";
import Modal from "react-modal";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-immutable';
import "./AddEvent.css";

const customStyles = {
    content : {
        top: '10%',
        border: 0,
        padding: 0,
        backgroundColor: 'transparent'
    }
};

export default class AddEvent extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            start: moment().startOf('hour').add(1, 'hour'),
            end: moment().startOf('hour').add(1, 'hour').add(10, 'minute')
        };
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    afterOpenModal = () => {
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    componentWillMount = () => {
        Modal.setAppElement('body');
    };

    componentDidMount = () => {
        this.props.onRef(this)
    };

    componentWillUnmount = () => {
        this.props.onRef(null)
    };

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Add event"
                    style={customStyles}
                >
                    <div className="modal-content AddEvent">
                        <div className="modal-header">
                            <h5 className="modal-title">Add event</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="startDate">Start date</label>
                                        <div className="input-group date" id="startDate" data-target-input="nearest">
                                            <DatePicker
                                                selected={this.state.start}
                                                onChange={this.handleChange}
                                                dateFormat="YYYY-MM-DD HH:mm"
                                                showTimeSelect
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="endDate">End date</label>
                                        <div className="input-group date" id="endDate" data-target-input="nearest">
                                            <DatePicker
                                                selected={this.state.end}
                                                onChange={this.handleChange}
                                                dateFormat="YYYY-MM-DD HH:mm"
                                                showTimeSelect
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-9">
                                        <label htmlFor="eventName">Event name</label>
                                        <input type="text" className="form-control" id="eventName" placeholder="Event name" />
                                    </div>

                                    <div className="form-group col-md-3 text-center all-day">
                                        <div className="form-check mb-2">
                                            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="allDay" />
                                                <label className="custom-control-label" htmlFor="allDay">All day</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add event</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
