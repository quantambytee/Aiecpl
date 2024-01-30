import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV2 = ({ service }) => {
    const { icon, title, delay } = service

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="service-style-two">
                    <div className="icon">
                        <i className={icon}></i>
                    </div>
                    <h6><Link to="/service-details#">{title}</Link></h6>
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceV2;