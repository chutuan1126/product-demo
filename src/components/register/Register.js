import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import className from 'classnames';
import './register.css';
import Bee from './bee.svg';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            signUp: false,
            login: true,
            isRedirect: false
        }
    }

    handleClick() {
        this.setState({
            signUp: !this.state.signUp,
            login: !this.state.login,
        })
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value.trim() })
    }

    handleSubmit(event) {
        event.preventDefault();
        const account = {
            userName: this.state.userName,
            password: this.state.password
        }

        if (account.userName === 'chutuan1126@gmail.com') {
            if (account.password === '261197') {
                this.props.login();
                this.setState({
                    isRedirect: true
                })
            }
        }
    }

    render() {
        const { signUp } = this.state;

        if (this.state.isRedirect === true) {
            return <Redirect to='/' />;
        }

        return (
            <div className='register'>
                <div className='form-register'>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <p
                            className={className('texto', { texto_true: signUp === true })}
                        >LOGIN<span className='texto-or'> or </span>REGISTER</p>
                        <div className="form-group email">
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder='Enter email'
                                name='userName'
                                onChange={(event) => this.onChange(event)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className={className('from-control', { bottom_from: signUp === false })}
                                placeholder={className({ password: signUp === false }, { 'New password': signUp === true })}
                                onChange={(event) => this.onChange(event)}
                                name='password'
                            />
                        </div>
                        {
                            signUp === true && (
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className={className('from-control', { bottom_from: signUp === true })}
                                        placeholder='Confirm password'
                                        onChange={(event) => this.onChange(event)}
                                        name='ConfirmPassword'
                                    />
                                </div>
                            )
                        }
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" defaultChecked />
                            <label className="form-check-label">
                                I have read and agree to Leno's stated conditions in Privacy Policy and Terms Conditions.
                            </label>
                        </div>
                        <div className="form-group submit">
                            <button type="submit" className="btn btn-primary">
                                {className({ Login: signUp === false }, { 'Sign Up': signUp === true })}
                            </button>
                        </div>
                    </form>
                    <div className="form-group forgot-password">
                        {
                            signUp === false && (
                                <div className="form-group forgot-password">
                                    <Link to='/signup/' onClick={this.handleClick.bind(this)}>Sign Up</Link>, <Link to='/'>Forgot password</Link>
                                </div>)
                        }
                        {
                            signUp === true && (
                                <div className="form-group forgot-password">
                                    <Link to='/login/' onClick={this.handleClick.bind(this)}>Login</Link>, <Link to='/'>Forgot password</Link>
                                </div>
                            )
                        }
                    </div>
                    <div className="form-group info-disigner">
                        <span className='form-check'>Design by:
                            <img src={Bee} width={32} height={32} alt='bee' /> chutuan1126@gmail.com
                        </span>
                    </div>
                </div>


            </div>
        );
    }
}

export default Register;