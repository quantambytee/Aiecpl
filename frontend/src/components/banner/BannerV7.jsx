import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import heroSevenThumb from '/images/hero/hero-seven-right-image.png'
import heroIcon1 from '/images/hero/hero-icon1.png'
import heroIcon2 from '/images/hero/hero-icon2.png'
import heroIcon3 from '/images/hero/hero-icon3.png'
import heroShape1 from '/images/shapes/hero-shape1.png'
import heroShape2 from '/images/shapes/hero-shape2.png'

const BannerV7 = () => {
    return (
        <>
            <section className="hero-section-seven z-1 rel pt-200 pb-100" style={{ backgroundImage: "url(/images/hero/hero-seven-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="hero-content-seven pt-100 pb-50">
                                <Fade className="fadeInUp" delay={200}>
                                    <span className="sub-title mb-5">01 Provide Best Services</span>
                                </Fade>
                                <Fade className="fadeInUp" delay={400}>
                                    <h1 className="mt-20">Big data will Come up with A Solution</h1>
                                </Fade>
                                <Fade className="fadeInUp" delay={600}>
                                    <p>Maecenas tincidunt ex quis arcu ultrices, et commodo diam volutpat. Fusce ligula mauris, sodales </p>
                                </Fade>
                                <Fade className="fadeInUp" delay={800}>
                                    <Link to="/contact#" className="theme-btn style-eight mt-30">Start Free Trial <i className="fas fa-long-arrow-alt-right"></i></Link>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-right-part">
                    <img src={heroSevenThumb} alt="Hero" />
                    <div className="data-item one">
                        <img src={heroIcon1} alt="Icon" />
                        <div className="data-item-content">
                            <h4>Data Visualization</h4>
                        </div>
                    </div>
                    <div className="data-item two">
                        <img src={heroIcon2} alt="Icon" />
                        <div className="data-item-content">
                            <h4>Data Scientist</h4>
                            <span>259+</span>
                        </div>
                    </div>
                    <div className="data-item three">
                        <img src={heroIcon3} alt="Icon" />
                        <div className="data-item-content">
                            <h4>Machine Scientist</h4>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-one">
                    <img src={heroShape1} alt="Shape" />
                </div>
                <div className="hero-shape-two">
                    <img src={heroShape2} alt="Shape" />
                </div>
            </section>
        </>
    );
};

export default BannerV7;