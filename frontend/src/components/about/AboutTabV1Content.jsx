import React from 'react';
import { Fade } from 'react-reveal';
import aboutTabThumb from '/images/about/about-tab.png'

const AboutTabV1Content = () => {
    return (
        <>
            <ul className="nav nav-tabs about-tab">
                <li className='nav-item' role='presentation'>
                    <a className="active" data-bs-toggle="tab" data-bs-target="#tabContent1">
                        <i className="flaticon-web-maintenance"></i>
                        <h3>Data Center</h3>
                    </a>
                </li>
                <li className='nav-item' role='presentation'>
                    <a data-bs-toggle="tab" data-bs-target="#tabContent2">
                        <i className="flaticon-web-development-4"></i>
                        <h3>Cloud Services</h3>
                    </a>
                </li>
                <li className='nav-item' role='presentation'>
                    <a data-bs-toggle="tab" data-bs-target="#tabContent3">
                        <i className="flaticon-web-programming"></i>
                        <h3>Web Development</h3>
                    </a>
                </li>
                <li className='nav-item' role='presentation'>
                    <a data-bs-toggle="tab" data-bs-target="#tabContent4">
                        <i className="flaticon-coding-5"></i>
                        <h3>IT Management </h3>
                    </a>
                </li>
            </ul>
            <div className="tab-content about-tab-content">
                <div className="tab-pane fade show active" id="tabContent1" role="tabpanel">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade className="fadeInLeft" delay={300}>
                                <div className="about-image-shape rmb-70">
                                    <img src={aboutTabThumb} alt="About" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="fadeInRight" delay={300}>
                                <div className="about-content pr-70 rpr-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title">It Support For Business</span>
                                        <h2>Preparing for your success trusted source in IT services.</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud </p>
                                    <ul className="list-style-one mt-15">
                                        <li>Custom short codes</li>
                                        <li>Data Analytics</li>
                                        <li>IT Consultancy</li>
                                        <li>Data security</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tabContent2" role="tabpanel">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade className="fadeInLeft" delay={300}>
                                <div className="about-image-shape rmb-70">
                                    <img src={aboutTabThumb} alt="About" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="fadeInRight" delay={300}>
                                <div className="about-content pr-70 rpr-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title">It Support For Business</span>
                                        <h2>Preparing for your success trusted source in IT services.</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud </p>
                                    <ul className="list-style-one mt-15">
                                        <li>Custom short codes</li>
                                        <li>Data Analytics</li>
                                        <li>IT Consultancy</li>
                                        <li>Data security</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tabContent3" role="tabpanel">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade className="fadeInLeft" delay={300}>
                                <div className="about-image-shape rmb-70">
                                    <img src={aboutTabThumb} alt="About" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="fadeInRight" delay={300}>
                                <div className="about-content pr-70 rpr-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title">It Support For Business</span>
                                        <h2>Preparing for your success trusted source in IT services.</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud </p>
                                    <ul className="list-style-one mt-15">
                                        <li>Custom short codes</li>
                                        <li>Data Analytics</li>
                                        <li>IT Consultancy</li>
                                        <li>Data security</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tabContent4" role="tabpanel">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade className="fadeInLeft" delay={300}>
                                <div className="about-image-shape rmb-70">
                                    <img src={aboutTabThumb} alt="About" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="fadeInRight" delay={300}>
                                <div className="about-content pr-70 rpr-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title">It Support For Business</span>
                                        <h2>Preparing for your success trusted source in IT services.</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud </p>
                                    <ul className="list-style-one mt-15">
                                        <li>Custom short codes</li>
                                        <li>Data Analytics</li>
                                        <li>IT Consultancy</li>
                                        <li>Data security</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutTabV1Content;