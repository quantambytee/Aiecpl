import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleWorkProgressV2 = ({ progress }) => {
    const { delay, icon, title, text, step } = progress;

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="progress-item-two">
                    <div className="icon">
                        <i className={icon}></i>
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Link to="/service-details#" className="learn-more">Read More <i className="fas fa-arrow-right"></i></Link>
                    <span className="progress-step">{step}</span>
                </div>
            </Fade>
        </>
    );
};

export default SingleWorkProgressV2;