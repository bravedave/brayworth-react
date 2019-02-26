import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import jQuery from 'jquery';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soz: this.props.soz,
            contactName: '',
            email: '',
            comments: '',
            sendCopy: false

        };

        this.buttonRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value

        });

    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.contactName);
        event.preventDefault();

        // console.log(this.state);

        let state = this.state;
        let options = {
            url: '/',
            type: 'POST',
            data: {
                action: 'Submit',
                soz: state.soz,
                riddle : '7',
                mathCheck : '7',
                contactName: state.contactName,
                email: state.email,
                comments: state.comments,
                sendCopy: state.sendCopy ? 'yes' : 'no'

            },

        };

        let btn = jQuery(this.buttonRef.current);

        // console.log(options);
        jQuery.ajax(options).then(function (d) {
            // console.log(d);
            if ('ack' === d.response) {
                if (d.data.success) {
                    btn.parent().append('<span>sent ..</span>');
                    btn.remove();

                }

            }

        });

        btn.prepend('<div class="spinner-border spinner-border-sm mr-1" />').prop('disabled', true);

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="offset-sm-3 col-sm-9">
                        <h1>Contact</h1>

                        <strong>Gold Coast, Q. Australia</strong><br />
                        PO Box 292 Tugun, Q 4224<br />
                        t. 0418 745334

                    </div>

                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="control-label col-sm-3"
                            htmlFor="contactName">Name</label>
                        <div className="col-sm-9">
                            <input className="form-control " type="text"
                                name="contactName"
                                id="contactName"
                                value={this.state.contactName}
                                onChange={this.handleChange}
                                required />

                        </div>

                    </div>

                    <div className="form-group row">
                        <label className="control-label col-sm-3"
                            htmlFor="email">Email</label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                type="email" name="email" id="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required />

                        </div>

                    </div>

                    <div className="form-group row">
                        <label className="control-label col-sm-3"
                            htmlFor="commentsText">Message</label>
                        <div className="col-sm-9">
                            <textarea className="form-control" rows="7"
                                name="comments" id="commentsText"
                                value={this.state.comments}
                                onChange={this.handleChange}></textarea>

                        </div>

                    </div>

                    <div className="form-group row">
                        <div className="offset-sm-3 col-sm-9">
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="checkbox"
                                    name="sendCopy" id="sendCopy"
                                    value={this.state.comments}
                                    onChange={this.handleChange} />
                                <label className="form-check-label" htmlFor="sendCopy">
                                    Send a copy of this email to yourself

                                </label>

                            </div>

                        </div>

                    </div>

                    <div className="form-group row">
                        <div className="offset-sm-3 col-sm-9">
                            <button className="btn btn-outline-primary" ref={this.buttonRef}>Submit</button>

                        </div>

                    </div>

                </form>

            </div>

        )

    }

};

Contact.propTypes = {
    soz: PropTypes.string.isRequired

};

export { Contact };
