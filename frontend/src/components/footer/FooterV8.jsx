import React from 'react';
import footerLogo from '/images/logos/logo-white.png'
import { HashLink as Link } from 'react-router-hash-link';
import SocialShare from '../others/SocialShare';
import logo from "../../assets/logo/bigLogo.png"
const FooterV8 = () => {
    return (
        <>
            <footer className="main-footer footer-seven bg-black text-white pt-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 footer-col">
                            <div className="footer-widget about-widget">
                                <div className="footer-logo mb-25">
                                    <Link to="/#"><img src={logo} alt="Logo" /></Link>
                                </div>
                                <div className="text">
                                We consistently deliver quality, professional and ethical service to our clientele, viz, students, government agencies, and education partners. Global Reach will continue to set the benchmark for Overseas Educational assistance and be the market leader.


                                </div>
                                <div className="social-style-two mt-30">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-col">
                            <div className="footer-widget link-widget ml-30 rml-0">
                                <h3 className="footer-title">Explore Links</h3>
                                <ul className="list-style-three">
                                    <li><Link to="/#">Home</Link></li>
                                    <li><Link to="#aboutUs">About Us</Link></li>
                                    <li><Link to="#service">Services</Link></li>
                                    {/* <li><Link to="/testimonial#">Testimonial</Link></li> */}
                                    <li><Link to="#contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget link-widget ml-30 rml-0">
                                <h3 className="footer-title">Services</h3>
                                <ul className="list-style-three">
                                    <li><Link to="/service-details#">Threat Hunter</Link></li>
                                    <li><Link to="/service-details#">Incident Responder</Link></li>
                                    <li><Link to="/service-details#">Secure Managed IT</Link></li>
                                    <li><Link to="/service-details#">Compliance</Link></li>
                                    <li><Link to="/service-details#">Cyber Security</Link></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-sm-6 footer-col">
                            <div className="footer-widget contact-widget">
                                <h3 className="footer-title">Information</h3>
                                <ul className="list-style-two">
                                    <li><i className="fas fa-phone-alt"></i><span><b>Phone : </b> <a href="tel:(+001)256689">(+91) 8789701805</a></span></li>
                                    <li><i className="fas fa-envelope"></i><span><b>Email : </b> <a href="mailto:motal@gmail.com">info@aiecpl.in</a></span></li>
                                    <li><i className="fas fa-map-marker-alt"></i><span><b>Address : </b>Sinha Library Road, Patna 800001, Bihar India</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area mt-30">
                    <div className="container">
                        <div className="copyright-inner pt-15">
                            <p>{(new Date().getFullYear())} Aiecpl All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV8;