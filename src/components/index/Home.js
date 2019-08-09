import React, { Component } from 'react';
import './index.css';
import shape1 from '../../shape/shape-1.png';
import shape2 from '../../shape/shape-2.png';
import shape3 from '../../shape/shape-3.png';
import shape4 from '../../shape/shape-4.png';
import shape5 from '../../shape/shape-5.png';
import shape6 from '../../shape/shape-6.png';
import DinhNhi from '../../shape/trieu-le-dinh.jpg';

class Home extends Component {
    render() {
        return (
            <div className="header-content d-flex align-items-center">
                <div className="header-shape shape-one layer" data-depth="0.10">
                    <img src={shape1} alt="Shape" />
                </div>
                <div className="header-shape shape-tow layer" data-depth="0.30">
                    <img src={shape2} alt="Shape" />
                </div>
                <div className="header-shape shape-three layer" data-depth="0.40">
                    <img src={shape3} alt="Shape" />
                </div>
                <div className="header-shape shape-fore layer" data-depth="0.60">
                    <img src={shape2} alt="Shape" />
                </div>
                <div className="header-shape shape-five layer" data-depth="0.20">
                    <img src={shape1} alt="Shape" />
                </div>
                <div className="header-shape shape-six layer" data-depth="0.15">
                    <img src={shape4} alt="Shape" />
                </div>
                <div className="header-shape shape-seven layer" data-depth="0.50">
                    <img src={shape5} alt="Shape" />
                </div>
                <div className="header-shape shape-eight layer" data-depth="0.40">
                    <img src={shape3} alt="Shape" />
                </div>
                <div className="header-shape shape-nine layer" data-depth="0.20">
                    <img src={shape6} alt="Shape" />
                </div>
                <div className="header-shape shape-ten layer" data-depth="0.30">
                    <img src={shape3} alt="Shape" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="header-content-right">
                                <h4 className="sub-title">Hello, I’m</h4>
                                <h1 className="title">Ron.J.Evans</h1>
                                <p>A Freelance Web Developer Full-Stack</p>
                                <button className="main-btn" href="/portfolio/" >View my Work</button>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <div className="header-image d-none d-lg-block">
                                <img src={DinhNhi} width={426} height={642} alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-social">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-social-icon">
                                    <ul>
                                        <li><a href="https://www.facebook.com/simonyellow.1126"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fab fa-behance"></i></a></li>
                                        <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;