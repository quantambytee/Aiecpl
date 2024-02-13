import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import protectsThumb from '/images/protects/ready.jpg'
import university1 from "../../assets/images/product/university1.jpg"
const PrivacyV2 = () => {
    return (
        <>
            <section className="ready-section pt-110 rpt-100 rel z-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade left delay={300}>
                                <div className="ready-content">
                                    <div className="section-title mb-30">
                                        <span className="sub-title">We are ready</span>
                                        <h2 className='product2-heading'>Studying Abroad Simplified:</h2>
                                    </div>
                                    <p>International Education in your Budget</p>
                                    <ul className="list-style-three pt-15 pb-30">
                                        <li>Save up to 50 lakh INR on International Degrees</li>
                                        <li>Fast-track Your Career Abroad</li>
                                        <li>End-to-end On-shore Support</li>
                                        <li>Expert Career Services</li>
                                    </ul>
                                    {/* <Link to="/about#" className="theme-btn style-ten hover-two">Discover More <i className="far fa-paper-plane"></i></Link> */}
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade right delay={300}>
                                <div className="ready-image">
                                    <img src={university1} alt="Ready" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyV2;