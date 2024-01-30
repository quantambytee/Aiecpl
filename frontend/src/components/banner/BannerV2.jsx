import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import banner2Thumb from '/images/hero/hero-two.jpg'

const BannerV2 = () => {
    return (
        <>
            <section className="hero-section bg-dark-blue pt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="hero-content text-white pt-100 pb-200 rpt-40 rpb-100">
                                <span className="sub-title d-block wow fadeInUp delay-0-2s">EMPOWER YOUR BUSINESS</span>
                                <Fade className="fadeInUp delay-0-4s">
                                    <h1 className="mt-20">Excellent IT services for your success</h1>
                                </Fade>
                                <Fade className="fadeInUp delay-0-6s">
                                    <div className="hero-btn mt-35">
                                        <Link to="/contact#" className="theme-btn">meet with us</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hero-image">
                                <img src={banner2Thumb} alt="Hero" />
                                <div className="circle-one"></div>
                                <div className="circle-two"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-circle"></div>
            </section>
        </>
    );
};

export default BannerV2;