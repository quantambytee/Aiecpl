import React from 'react';
import FooterWidgetV1 from './FooterWidgetV1';
import FooterCopyRightV1 from './FooterCopyRightV1';

const FooterV2 = () => {

    return (
        <>
            <footer className="main-footer overflow-hidden footer-two bgs-cover text-white" style={{ backgroundImage: "url(/images/footer/footer-bg-map.png)" }}>
                <div className="container">
                    <div className="footer-top pt-75">
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <div className="content">
                                    <span>Call Us</span>
                                    <h5><a href="tel:+012-345-6789">+012-345-6789</a></h5>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <div className="content">
                                    <span>Write to Us</span>
                                    <h5><a href="mailto:info@example.com">info@example.com</a></h5>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-clock"></i>
                                <div className="content">
                                    <span>Office hours</span>
                                    <h5>Mon-Sat 9:00 - 7:00</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <FooterWidgetV1 widgetSpace="pb-20" />
                </div>
                <FooterCopyRightV1 />
            </footer>
        </>
    );
};

export default FooterV2;