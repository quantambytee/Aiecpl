import React from 'react';
import aboutThumb5 from '/images/about/about-five.jpg'
import aboutCircle from '/images/about/about-circle-dots.png'
import { HashLink as Link } from 'react-router-hash-link';

const AboutV5 = () => {
    return (
        <>
            <section className="about-section style-five py-120 rpy-100">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-fiver-image rel rmb-60">
                                <img src={aboutThumb5} alt="About" />
                                <img className="about-bg-circle" src={aboutCircle} alt="About" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-content pl-70 rpl-0">
                                <div className="section-title mb-35">
                                    <span className="sub-title">It Support For Business</span>
                                    <h2>Preparing for your IT business success</h2>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="flaticon-3d-printing"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h5>IT Management</h5>
                                        <p>Lorem ipsum dolor sitmet consectetur adipiscing elit sed do eiusmod</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="flaticon-repair"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h5>Machine Learning</h5>
                                        <p>Lorem ipsum dolor sitmet consectetur adipiscing elit sed do eiusmod</p>
                                    </div>
                                </div>
                                <Link to="/about#" className="theme-btn mt-10">learn about more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV5;