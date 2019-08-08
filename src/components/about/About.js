import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <section className="about-area pt-125 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <h2 className="title">About Me</h2>
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content mt-50">
                                <h5 className="about-title">Hi There! I'm Ron.J.Evans</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul className="clearfix">
                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon">
                                                <i className="far fa-calendar-alt"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Date of birth:</span> 26 November 1997</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon">
                                                <i className="far fa-envelope"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Email:</span> chutuan1126@gmail.com.com</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Phone:</span> +84 969 654 153</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Location:</span>204/4A, QL 13, P.26, Q.Bình Thạnh, Tp.HCM</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6">
                            <div className="about-skills pt-25">
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">HTML</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <span className="counter">80%</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line html" data-width="80"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">CSS</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <span className="counter">60%</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line css" data-width="60"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Photoshop</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <span className="counter">50%</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line photoshop" data-width="50"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Sketch</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <span className="counter">90%</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line sketch" data-width="90"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;