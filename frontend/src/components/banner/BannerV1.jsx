import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const BannerV1 = () => {
    return (
        <>
            <section className="hero-section overlay bgs-cover pt-200 pb-150" style={{ backgroundImage: "url(/images/hero/hero-one.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-9">
                            <div className="hero-content text-center text-white">
                                <Fade delay={200} bottom>
                                    <span className="sub-title d-block">EMPOWER YOUR BUSINESS</span>
                                </Fade>
                                <Fade delay={400} bottom>
                                    <h1 className="mt-20">Excellent IT services for your success</h1>
                                </Fade>
                                <Fade delay={600} bottom>
                                    <div className="hero-btn mt-35">
                                        <Link to="/contact#" className="theme-btn">meet with us</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerV1;