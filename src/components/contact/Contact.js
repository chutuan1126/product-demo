import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import className from 'classnames';
import './contact.css';

class Contact extends Component {
    constructor() {
        super();

        this.state = ({
            fName: '',
            fEmail: '',
            fMessage: ''
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isRedirect: true
        })
    }

    blur() {
        this.setState({
            name: false,
            email: false,
            message: false
        })
    }

    toggle(event) {
        this.setState({ [event.target.dataset.name]: true })
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value.trim() })
    }

    render() {
        const { fName, fEmail, fMessage } = this.state;
        
        if (this.state.isRedirect === true) {
            return <Redirect to='/' />;
        }

        return (
            <div id="contact" className="form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>CONTACT</h2>
                            <ul className="list-unstyled li-space-lg">
                                <li className="address">Don't hesitate to give us a call or just use the contact form below</li>
                                <li><i className="fas fa-map-marker-alt"></i>22 Innovative, San Francisco, CA 94043, US</li>
                                <li><i className="fas fa-phone"></i><a className="blue" href="/">+81 720 2212</a></li>
                                <li><i className="fas fa-envelope"></i><a className="blue" href="/">office@leno.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">

                            {/* <!-- Contact Form --> */}
                            <form action='/contact/' onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group has-error has-danger">
                                    <input
                                        type="text"
                                        data-name='name'
                                        className="form-control-input"
                                        name='fName'
                                        onChange={(event) => this.onChange(event)}
                                        onFocus={(event) => this.toggle(event)}
                                        onBlur={() => this.blur()}
                                    />
                                    <label
                                        className={className('label-control', { focus: this.state.name === true || fName.length > 0 })}
                                    >Name</label>
                                    <div className="help-block with-errors">
                                        <ul className="list-unstyled">
                                            <li>Please fill out this field.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group has-error has-danger">
                                    <input
                                        type="email"
                                        data-name='email'
                                        className="form-control-input"
                                        name='fEmail'
                                        onChange={(event) => this.onChange(event)}
                                        onFocus={(event) => this.toggle(event)}
                                        onBlur={() => this.blur()}
                                    />
                                    <label
                                        className={className('label-control', { focus: this.state.email === true || fEmail.length > 0 })}
                                    >Email</label>
                                    <div className="help-block with-errors">
                                        <ul className="list-unstyled">
                                            <li>Please fill out this field.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group has-error has-danger">
                                    <textarea
                                        className="form-control-textarea"
                                        name='fMessage'
                                        data-name='message'
                                        onChange={(event) => this.onChange(event)}
                                        onFocus={(event) => this.toggle(event)}
                                        onBlur={() => this.blur()}
                                    />
                                    <label
                                        className={className('label-control', { focus: this.state.message === true || fMessage.length > 0 })}
                                    >Your message</label>
                                    <div className="help-block with-errors">
                                        <ul className="list-unstyled">
                                            <li>Please fill out this field.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group checkbox">
                                    <input type="checkbox" id="cterms" value="Agreed-to-Terms" />
                                    <span>I have read and agree to Leno's stated conditions in Privacy Policy and Terms Conditions.</span>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="form-control-submit-button disabled"
                                    >SUBMIT MESSAGE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;