import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import ModalVideo from 'react-modal-video';
import { HashLink as Link } from 'react-router-hash-link';

const BannerV6 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="hero-section-six bg-lighter z-1 rel pt-80 rpt-65">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="hero-content-six mr-10 rmr-0 py-100 rpy-80">
                                <Fade className="fadeInUp" delay={200}>
                                    <span className="sub-title d-block">Were creative</span>
                                </Fade>
                                <Fade className="fadeInUp" delay={400}>
                                    <h1 className="mt-20">The direct way Organize your saas</h1>
                                </Fade>
                                <Fade className="fadeInUp" delay={600}>
                                    <p>Integer molestie magna in augue euismod, sit amet pulvinar arcu dapibus.</p>
                                </Fade>
                                <Fade className="fadeInUp" delay={800}>
                                    <div className="hero-btns mt-35">
                                        <Link to="/about#" className="theme-btn mr-25 mb-10">Discover More <i className="fas fa-arrow-right"></i></Link>
                                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
                                        <Link className="mfp-iframe video-play mb-10" onClick={() => setOpen(true)}>
                                            <i className="fas fa-play"></i> <span>Watch Video</span>
                                        </Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Fade className="fadeInRight" delay={800}>
                                <div className="hero-six-images">
                                    <img src="/images/hero/hero-six-1.png" alt="Hero" />
                                    <img src="/images/hero/hero-six-2.png" alt="Hero" />
                                    <img src="/images/hero/hero-six-3.png" alt="Hero" />
                                    <img src="/images/hero/hero-six-ellipse.png" alt="Ellipse" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="hero-shapes">
                    <img src="/images/shapes/lines.png" alt="Shape" />
                    <img src="/images/shapes/w-shape.png" alt="Shape" />
                    <img src="/images/shapes/close.png" alt="Shape" />
                    <img src="/images/shapes/triangle.png" alt="Shape" />
                    <img src="/images/shapes/circle.png" alt="Shape" />
                </div>
            </section>
        </>
    );
};

export default BannerV6;