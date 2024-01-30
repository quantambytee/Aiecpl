import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV7 = ({ service }) => {
    const { icon, title, text, delay } = service

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="feature-item-two">
                    <div className="icon">
                        <i className={icon}></i>
                    </div>
                    <div className="feature-line">
                        <span className="animate-bar"></span>
                    </div>
                    <h4><Link to="/service-details#">{title}</Link></h4>
                    <p>{text}</p>
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceV7;