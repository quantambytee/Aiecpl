import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavigationMenu = () => {
    return (
        <>
            <div className="navbar-collapse collapse clearfix">
                <ul className="navigation clearfix">
                    <li className="current dropdown"><Link to="/#">Home</Link>
                        <ul>
                            <li><Link to="/#">Home One</Link></li>
                            <li><Link to="/home-2#">Home Two</Link></li>
                            <li><Link to="/home-3#">Home Three</Link></li>
                            <li><Link to="/home-4#">Home Four</Link></li>
                            <li><Link to="/home-5#">Home Five</Link></li>
                            <li><Link to="/home-6#">Home Six</Link></li>
                            <li><Link to="/home-7#">Home Seven</Link></li>
                            <li><Link to="/home-8#">Home Eight</Link></li>
                            <li><Link to="/home-9#">Home Nine</Link></li>
                            <li><Link to="/home-10#">Home Ten</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">About Us</Link>
                        <ul>
                            <li><Link to="/about#">About One</Link></li>
                            <li><Link to="/about-2#">About Two</Link></li>
                            <li><Link to="/about-3#">About Three</Link></li>
                            <li><Link to="/about-4#">About Four</Link></li>
                            <li><Link to="/about-5#">About Five</Link></li>
                            <li><Link to="/about-6#">About Six</Link></li>
                            <li><Link to="/about-7#">About Seven</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">service</Link>
                        <ul>
                            <li><Link to="/services#">Services One</Link></li>
                            <li><Link to="/services-2#">Services Two</Link></li>
                            <li><Link to="/services-3#">Services Three</Link></li>
                            <li><Link to="/services-4#">Services Four</Link></li>
                            <li><Link to="/services-5#">Services Five</Link></li>
                            <li><Link to="/services-6#">Services Six</Link></li>
                            <li><Link to="/services-7#">Services Seven</Link></li>
                            <li><Link to="/service-details#">Service Details</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">pages</Link>
                        <ul>
                            <li><Link to="/counter#">Counter Page</Link></li>
                            <li className="dropdown"><Link to="#">Shop Page</Link>
                                <ul>
                                    <li><Link to="/shop#">Shop Page</Link></li>
                                    <li><Link to="/shop-details#">Shop Details</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Portfolio</Link>
                                <ul>
                                    <li><Link to="/portfolio#">Portfolio</Link></li>
                                    <li><Link to="/portfolio-2#">Portfolio Two</Link></li>
                                    <li><Link to="/portfolio-3#">Portfolio Three</Link></li>
                                    <li><Link to="/portfolio-4#">Portfolio Four</Link></li>
                                    <li><Link to="/portfolio-details#">Portfolio Details</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Team Member</Link>
                                <ul>
                                    <li><Link to="/team#">Team One</Link></li>
                                    <li><Link to="/team-2#">Team Two</Link></li>
                                    <li><Link to="/team-3#">Team Three</Link></li>
                                    <li><Link to="/team-4#">Team Four</Link></li>
                                    <li><Link to="/team-profile#">Team Profile</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Pricing page</Link>
                                <ul>
                                    <li><Link to="/pricing#">Pricing One</Link></li>
                                    <li><Link to="/pricing-2#">Pricing Two</Link></li>
                                    <li><Link to="/pricing-3#">Pricing Three</Link></li>
                                    <li><Link to="/pricing-4#">Pricing Four</Link></li>
                                    <li><Link to="/pricing-5#">Pricing Five</Link></li>
                                    <li><Link to="/pricing-6#">Pricing Six</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Testimonials page</Link>
                                <ul>
                                    <li><Link to="/testimonial#">Testimonials One</Link></li>
                                    <li><Link to="/testimonial-2#">Testimonials Two</Link></li>
                                    <li><Link to="/testimonial-3#">Testimonials Three</Link></li>
                                    <li><Link to="/testimonial-4#">Testimonials Four</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/404#">404 Error</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">blog</Link>
                        <ul>
                            <li><Link to="/blog#">Blog Standard</Link></li>
                            <li><Link to="/blog-details#">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact#">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default NavigationMenu;