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
                            
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">About Us</Link>
                        <ul>
                            <li><Link to="/about#">About One</Link></li>
                            
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">service</Link>
                        <ul>
                            <li><Link to="/services#">Services One</Link></li>
                         
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">pages</Link>
                        <ul>
                            {/* <li><Link to="/counter#">Counter Page</Link></li>
                            <li className="dropdown"><Link to="#">Shop Page</Link>
                                <ul>
                                    <li><Link to="/shop#">Shop Page</Link></li>
                                    <li><Link to="/shop-details#">Shop Details</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Portfolio</Link>
                                <ul>
                                    <li><Link to="/portfolio#">Portfolio</Link></li>
                                   
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Team Member</Link>
                                <ul>
                                    <li><Link to="/team#">Team One</Link></li>
                                    
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Pricing page</Link>
                                <ul>
                                    <li><Link to="/pricing#">Pricing One</Link></li>
                                    
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Testimonials page</Link>
                                <ul>
                                    <li><Link to="/testimonial#">Testimonials One</Link></li>
                                    
                                </ul>
                            </li>
                            <li><Link to="/404#">404 Error</Link></li> */}
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