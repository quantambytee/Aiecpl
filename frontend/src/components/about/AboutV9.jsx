import React from 'react';
import aboutThumb1 from '/images/about/about-eight1.jpg'
import aboutThumb2 from '/images/about/about-eight2.jpg'
import { HashLink as Link } from 'react-router-hash-link';
import { Fade } from 'react-reveal';

const AboutV9 = () => {
    return (
        <>
            <section className="about-section-eight pt-70 rpt-35 pb-120 rpb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Fade left delay={300}>
                                <div className="about-eight-images rmb-55">
                                    <img src={aboutThumb1} alt="AboutThumb" />
                                    <img src={aboutThumb2} alt="AboutThumb" />
                                    <div className="left-content text-white p-40" style={{ backgroundImage: "url(/images/about/about-eight-content-bg.jpg)" }}>
                                        <h5>1,400+ Trusted Clients</h5>
                                        <p>Pulvinar ornare in a sem. Quisque vulputate convallis nulla. In efficitur</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-6">
                            <Fade right delay={300}>
                                <div className="about-eight-content">
                                    <div className="row">
                                        <div className="col-xl-10">
                                            <div className="section-title mb-30">
                                                <span className="sub-title">Know Avout Company</span>
                                                <h2>Security is our number One priority</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Pulvinar ornare in a sem. Quisque vulputate convallis nulla. In efficitur scelerisque odio sed tincidunt. Integer maximus eu tellus eleifend feugiat. Aliquam hendrerit pulvinar augue vitae rutrum. In sit amet neque odio</p>
                                    <ul className="list-style-one mt-35 pb-45">
                                        <li>Essential Features of Cybersecurity</li>
                                        <li>Coverage of your biggest external threats.</li>
                                        <li>Threat detection prevention and response</li>
                                    </ul>
                                    <Link to="/about#" className="theme-btn style-ten hover-two">Discover More <i className="far fa-paper-plane"></i></Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV9;