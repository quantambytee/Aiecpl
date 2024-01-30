import React from 'react';
import logoFooter2 from "/images/logos/logo-footer-two.png"
import { HashLink as Link } from 'react-router-hash-link';
import SocialShare from '../others/SocialShare';

const FooterV6 = () => {
    return (
        <>
            <footer className="main-footer footer-five bg-lighter pt-110">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="footer-logo mb-35">
                                    <Link to="/#"> <img src={logoFooter2} alt="Logo" /></Link>
                                </div>
                                <div className="text">
                                    Build a modern and creative website with crealand
                                </div>
                                <div className="social-style-two mt-30">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget link-widget ml-50 rml-0">
                                <h4 className="footer-title">Product</h4>
                                <ul className="list-style-two">
                                    <li><Link to="#">Landing page</Link></li>
                                    <li><Link to="#">Features</Link></li>
                                    <li><Link to="#">Documentation</Link></li>
                                    <li><Link to="#">Referral Program</Link></li>
                                    <li><Link to="/pricing#">Pricing</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget link-widget ml-50 rml-0">
                                <h4 className="footer-title">Services</h4>
                                <ul className="list-style-two">
                                    <li><Link to="#">Documentation</Link></li>
                                    <li><Link to="#">License</Link></li>
                                    <li><Link to="#">Changelog</Link></li>
                                    <li><Link to="#">Developers</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget contact-widget mr-30 rmr-0">
                                <h4 className="footer-title">Information</h4>
                                <ul className="list-style-two">
                                    <li><i className="fas fa-phone-alt"></i> <a href="tel:+123-589-847">+123 - 589 - 847</a>
                                    </li>
                                    <li><i className="fas fa-envelope"></i> <a href="mailto:resly@gmail.com">resly@gmail.com</a>
                                    </li>
                                    <li><i className="fas fa-map-marker-alt"></i> 1791 Yorkshire Circle Kitty Hawk, NC 279499
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area mt-50">
                    <div className="container">
                        <div className="copyright-inner justify-content-center">
                            <p>&copy; {(new Date().getFullYear())} Restly All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default FooterV6;