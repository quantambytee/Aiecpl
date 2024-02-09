import React from 'react';
import aboutThumb1 from '/images/about/about-eight1.jpg'
import aboutThumb2 from '/images/about/about-eight2.jpg'
import { HashLink as Link } from 'react-router-hash-link';
import { Fade } from 'react-reveal';
import about1 from "../../assets/about/about1.jpeg"
import about2 from "../../assets/about/about2.jpeg"

const AboutV9 = () => {
    return (
        <>
            <section id="aboutUs" className="about-section-eight pt-70 rpt-35 pb-120 rpb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Fade left delay={300}>
                                <div className="about-eight-images rmb-55">
                                    <img src={about1} alt="AboutThumb" />
                                    <img src={about2} alt="AboutThumb" />
                                    <div className="left-content text-white p-40" >
                                        <h5>Our commitment:</h5>
                                        <p>exceptional, ethical, professional service for students, government, and educational partners.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-6">
                            <Fade right delay={300}>
                                <div className="about-eight-content">
                                    <div className="row">
                                        <div className="col-xl-10 about-section">
                                            <div className="section-title mb-30">
                                                <span className="sub-title">Know About Company</span>
                                                <h2>Empowering Your Future, Connecting Global Dreams</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <p>At the heart of our mission lies a commitment to not just envisioning a brighter future, 
                                        but actively empowering individuals to reach it. Our company stands as a bridge between
                                         aspirations and achievements, connecting global dreams with tangible realities.
                                          We understand that every journey is unique, every ambition personal, and every success a shared celebration. 
                                          Through our innovative solutions, expert guidance, and unwavering support,
                                           we're dedicated to unlocking potential, fostering growth, 
                                           and turning the dreams of today into the achievements of tomorrow. 
                                           Together, we're not just dreaming of a better future; we're making it happen.</p>
                                    <ul className="list-style-one mt-35 pb-45">
                                        <li>Personalized Counseling</li>
                                        <li>Excellent Local Support</li>
                                        <li>Resources and Infrastructure</li>
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