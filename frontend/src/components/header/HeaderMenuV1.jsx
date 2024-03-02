import React, { useEffect, useState } from 'react';
import SocialShare from '../others/SocialShare';
import logo from '/images/logos/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
import MobileHeader from './MobileHeader';
import NavigationMenu from './NavigationMenu';
import MeetBtn from './MeetBtn';
import LOGOBig from "../../assets/logo/LogoBig.jpeg"

const HeaderMenuV1 = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`${isSticky ? 'fixed-header' : ''}`} >
                <MobileHeader />
                <div className="main-header header-one">
                    <div className="header-top bg-lighter py-10">
                        <div className="top-left">
                            <ul>
                                <li>Call Us: <Link to="tel:548978478">+91 8789701805</Link></li>
                                <li>Email us: <Link to="mailto:demo@example.com">info@aiecpl.in</Link></li>
                                <li>Our address: Sinha Library Road, Patna 800001, Bihar India </li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <div className="office-time">
                                {/* <i className="far fa-clock"></i><span>08:00 am - 06:00 pm</span> */}
                            </div>
                            <div className="social-style-one">
                                <SocialShare />
                            </div>
                        </div>
                    </div>
                    <div className="header-upper bg-white">
                        <div className="container-fluid clearfix headerTop">
                            <div className="header-inner d-flex align-items-center">
                                <div className="logo-outer bg-blue py-30 px-85 logo-main header-logo">
                                    <div className="logo">
                                        <Link to="/#"><img src={LOGOBig} alt="Logo" title="Logo" /></Link>
                                    </div>
                                </div>
                                <div className="nav-outer clearfix d-flex align-items-center">
                                    <nav className="main-menu navbar-expand-lg">
                                    <NavigationMenu />
                                    </nav>
                                    <MeetBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenuV1;