import React from 'react';
import { Fade } from 'react-reveal';
import aboutImage from '/images/about/about.png'
import CounterV1 from '../counter/CounterV1';


const AboutV1 = ({ aboutClass, textColor, counter = true }) => {
    return (
        <>
            <section className={`about-section pt-120 rpt-100 ${aboutClass}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade delay={200}>
                                <div className="about-image-shape rmb-70 fadeInLeft">
                                    <img src={aboutImage} alt="About" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="right" delay={200}>
                                <div className={`about-content pr-70 rpr-0 ${textColor}`}>
                                    <div className="section-title mb-35">
                                        <span className="sub-title">It Support For Business</span>
                                        <h2>Preparing for your success trusted source in IT services.</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud </p>
                                    <ul className="list-style-one mt-15">
                                        <li>Custom shortcodes</li>
                                        <li>Data Analytics</li>
                                        <li>IT Consultancy</li>
                                        <li>Data security</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                {counter && (<CounterV1 />)}
            </section>
        </>
    );
};

export default AboutV1;