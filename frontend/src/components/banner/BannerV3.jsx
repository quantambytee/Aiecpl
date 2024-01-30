import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';

const BannerV3 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="hero-section-two bgs-cover overlay pt-40 rpt-80" style={{ backgroundImage: "url(/images/hero/hero-three.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 col-sm-11">
                            <div className="hero-content text-white py-220 rpy-120">
                                <span className="sub-title d-block wow fadeInUp delay-0-2s">EMPOWER YOUR BUSINESS</span>
                                <h1 className="wow fadeInUp delay-0-4s mt-20">Web & Mobile Apps Development</h1>
                                <div className="hero-btns mt-35 wow fadeInUp delay-0-6s">
                                    <Link to="/contact#" className="theme-btn mr-25">meet with us</Link>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
                                    <Link className="mfp-iframe video-play" onClick={() => setOpen(true)}>
                                        <i className="fas fa-play"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerV3;