import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV3 = ({ service }) => {
    const { icon, title, text, delay } = service

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="service-three-item">
                    <div className="icon">
                        <i className={icon}></i>
                    </div>
                    <h4><Link to="/service-details#">{title}</Link></h4>
                    <p>{text}</p>
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceV3;