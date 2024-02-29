import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavigationMenu = () => {
    return (
        <>
            <div className="navbar-collapse collapse clearfix">
                <ul className="navigation clearfix">
                    <li className="current dropdown"><Link to="/#">Home</Link>
                        {/* <ul>
                            <li><Link to="/#">Home One</Link></li>
                            
                        </ul> */}
                    </li>
                    <li className="dropdown"><Link to="#aboutUs">About Us</Link>
                        {/* <ul>
                            <li><Link to="/about#">About One</Link></li>
                            
                        </ul> */}
                    </li>
                    <li className="dropdown"><Link to="#Our-service">service</Link>
                        {/* <ul>
                            <li><Link to="/services#">Services One</Link></li>
                         
                        </ul> */}
                    </li>
                    <li className="dropdown"><Link to="#">Explore Your Study Destinations</Link>
                        <ul>
                            <li><Link to="/service-details#">Study In Australia</Link></li>
                            <li><Link to="/italy-details#">Study In Italy</Link></li>
                            <li><Link to="/service-details#">Study In Germany</Link></li>
                            <li><Link to="/service-details#">Study In Japan</Link></li>
                            <li><Link to="/service-details#">Study In New Zealand</Link></li>
                            <li><Link to="/service-details#">Study In Bulgaria</Link></li>
                            <li><Link to="/service-details#">Study In Bangaladesh</Link></li>
                            <li><Link to="/service-details#">Study In Nepal</Link></li>
                            <li><Link to="/service-details#">Study In Kazakhstan</Link></li>
                            <li><Link to="/service-details#">Study In Belgium</Link></li>
                            <li><Link to="/service-details#">Study In Poland</Link></li>
                            {/* <li><Link to="/404#">404 Error</Link></li> */}
                        </ul>
                    </li>
                    {/* <li className="dropdown"><Link to="#">blog</Link>
                        <ul>
                            <li><Link to="/blog#">Blog Standard</Link></li>
                            <li><Link to="/blog-details#">Blog Details</Link></li>
                        </ul>
                    </li> */}
                    <li><Link to="#contact-us">Contact</Link></li>
                    {/* <li><Link to="/college-finder#">College Finder</Link></li> */}
                </ul>
            </div>
        </>
    );
};

export default NavigationMenu;