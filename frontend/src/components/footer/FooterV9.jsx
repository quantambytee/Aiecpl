import React from 'react';
import footerLogo3 from '/images/logos/logo-white-three.png'
import SocialShare from '../others/SocialShare';
import { HashLink as Link } from 'react-router-hash-link';
import { toast } from 'react-toastify';

const FooterV9 = () => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for Your Email")
    }

    return (
        <>
            <footer className="main-footer footer-nine pt-100 rel z-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="footer-logo mb-30">
                                    <Link to="/#"><img src={footerLogo3} alt="Logo" /></Link>
                                </div>
                                <div className="text">
                                    <p> Integer gravida posuere lacus et suscipit. Pellentesque sed ipsum sollicitudin, fermentum nibh elementum, dignissim leo. In hac habitasse platea dictumst.</p>
                                </div>
                                <div className="social-style-two mt-30">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="footer-widget link-widget">
                                <h3 className="footer-title">Marketplace</h3>
                                <ul className="list-style-two">
                                    <li><Link to="#">All NFTs</Link></li>
                                    <li><Link to="#">Art</Link></li>
                                    <li><Link to="#">Collectibles</Link></li>
                                    <li><Link to="#">Photography</Link></li>
                                    <li><Link to="#">Sports</Link></li>
                                    <li><Link to="#">Trading Cards</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="footer-widget link-widget">
                                <h3 className="footer-title">Resoures</h3>
                                <ul className="list-style-two">
                                    <li><Link to="#">Help Center</Link></li>
                                    <li><Link to="#">Platform Status</Link></li>
                                    <li><Link to="#">Partners</Link></li>
                                    <li><Link to="/blog#">Blog</Link></li>
                                    <li><Link to="#">Docs</Link></li>
                                    <li><Link to="#">Newsletter</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget newsletter-widget">
                                <h3 className="footer-title">Subscribe</h3>
                                <p>Aenean volutpat in massa at euismod. Phasellus quis viverra lacus, ac interdum</p>
                                <form onSubmit={handleEmail} >
                                    <input type="email" name="EMAIL" placeholder="Your Email Address" autoComplete='off' required />
                                    <button value="submit"><i className="fa fa-location-arrow"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area mt-50 py-15">
                    <div className="container">
                        <div className="copyright-inner">
                            <p>&copy; {(new Date().getFullYear())} Restly All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV9;