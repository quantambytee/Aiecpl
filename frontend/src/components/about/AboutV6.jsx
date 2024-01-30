import React from 'react';
import { Fade } from 'react-reveal';
import aboutThumb4 from '/images/about/about-four.jpg'
import aboutThumb3 from '/images/about/about-four-2.jpg'
import aboutThumb2 from '/images/about/about-five-two.jpg'
import aboutCircleDot from '/images/about/about-circle-dots.png'
import { HashLink as Link } from 'react-router-hash-link';

const AboutV6 = () => {
    return (
        <>
            <section className="about-section style-fiver py-120 rpy-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade left delay={300}>
                                <div className="about-content-six pr-90 rpr-0 rmb-65">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">It Support For Business</span>
                                        <h2>Preparing for your success trusted source in IT pros for global providing</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud </p>
                                    <ul className="list-style-one mt-25 pb-10">
                                        <li>Best IT Solutions</li>
                                        <li>Professional Web Solutions</li>
                                        <li>Products Engeering</li>
                                    </ul>
                                    <Link to="/about#" className="theme-btn mt-25">Learn About More</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade right delay={300}>
                                <div className="about-four-images text-center">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <img src={aboutThumb4} alt="About" />
                                            <img className="about-bg-circle d-block mx-auto" src={aboutCircleDot} alt="About" />
                                        </div>
                                        <div className="col-6">
                                            <img className="mb-35 d-block mx-auto" src={aboutThumb2} alt="Logo" />
                                            <img src={aboutThumb3} alt="About" />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV6;