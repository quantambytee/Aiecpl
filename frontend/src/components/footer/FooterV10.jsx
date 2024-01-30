import React from 'react';
import logoTwo from '/images/logos/logo-two.png'
import CounterV6 from '../counter/CounterV6';
import SocialShare from '../others/SocialShare';
import { HashLink as Link } from 'react-router-hash-link';

const FooterV10 = () => {
    return (
        <>
            <footer className="main-footer footer-ten pt-130 rpt-100">
                <div className="container container-1250">
                    <CounterV6 />
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="footer-logo mt-0 mb-35">
                                    <Link to="/#"><img src={logoTwo} alt="Logo" /></Link>
                                </div>
                                <div className="text">
                                    On the other hand denounce with righteous indignation dislike beguiled and demoralized
                                </div>
                                <div className="social-style-two mt-30">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget link-widget ml-50 rml-0">
                                <h3 className="footer-title">Quick Links</h3>
                                <ul className="list-style-three">
                                    <li><Link to="#">Latest News & Blog</Link></li>
                                    <li><Link to="#">Privacy & Policy</Link></li>
                                    <li><Link to="/services#">Our Services</Link></li>
                                    <li><Link to="#">Core Features</Link></li>
                                    <li><Link to="/about#">About Applio</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget link-widget ml-50 rml-0">
                                <h3 className="footer-title">Support</h3>
                                <ul className="list-style-three">
                                    <li><Link to="#">My Dashboard</Link></li>
                                    <li><Link to="#">Need a Career?</Link></li>
                                    <li><Link to="#">Download Apps</Link></li>
                                    <li><Link to="#">Meet The Team</Link></li>
                                    <li><Link to="#">Newsletter</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget download-widget mr-30 rmr-0">
                                <h3 className="footer-title">Download</h3>
                                <div className="footer-btns mt-35">
                                    <a href='https://play.google.com' target='_blank' rel="noreferrer" className="theme-btn prev-icon mr-15 mb-15"><i className="fab fa-google-play rtl-margin-2"></i> Google Play</a>
                                    <a href='https://apple.com/app-store/' target='_blank' rel="noreferrer" className="theme-btn prev-icon style-six"><i className="fab fa-apple rtl-margin-2"></i> Apple Store</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area mt-30 bg-lighter">
                    <div className="container">
                        <div className="copyright-inner justify-content-center">
                            <p>Copyright &copy; {(new Date().getFullYear())} Restly All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV10;