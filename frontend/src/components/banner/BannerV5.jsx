import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const BannerV5 = () => {
    return (
        <>
            <section className="hero-section-five rel pt-125">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="hero-content-five mr-10 rmr-0 py-125 rpy-100">
                                <Fade bottom delay={300}>
                                    <span className="sub-title d-block">EMPOWER YOUR BUSINESS</span>
                                </Fade>
                                <Fade bottom delay={500}>
                                    <h1 className="mt-20">Excellent services for IT success</h1>
                                </Fade>
                                <Fade className="fadeInUp" delay={750}>
                                    <ul className="list-style-one py-10">
                                        <li>Best IT Solutions</li>
                                        <li>Professional Web Solutions</li>
                                        <li>Products Engeering</li>
                                    </ul>
                                </Fade>
                                <Fade bottom delay={900}>
                                    <div className="hero-btns mt-35">
                                        <Link to="/contact#" className="theme-btn mr-15 mb-10">meet with us</Link>
                                        <Link to="/about#" className="theme-btn style-six mb-10">learn more</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <Fade right delay={900}>
                    <div className="hero-five-image bgs-cover" style={{ backgroundImage: "url(/images/hero/hero-five.jpg)" }}></div>
                </Fade>
            </section>
        </>
    );
};

export default BannerV5;