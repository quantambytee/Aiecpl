import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV1 = ({ service }) => {
    const { icon, title, text, icon2, title2, text2, delay } = service;

    return (
        <>
            <Fade delay={delay}>
                <div className="service-box fadeInUp">
                    <div className="service-normal">
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                        <h6>{title}</h6>
                        <p>{text}</p>
                        <Link to="/service-details#" className="btn-circle">
                            <i className={icon2}></i>
                        </Link>
                    </div>
                    <div className="service-hover bg-blue text-white">
                        <h3>{title2}</h3>
                        <p>{text2}</p>
                        <Link to="/service-details#" className="theme-btn">Learn More</Link>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceV1;