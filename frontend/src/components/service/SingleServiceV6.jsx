import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV6 = ({ service }) => {
    const { thumb, icon, title, text2, delay } = service

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="service-item-five">
                    <img src={`/images/services/${thumb}`} alt="Service" />
                    <div className="service-content-five">
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                        <h3>{title}</h3>
                        <p>{text2}</p>
                        <Link to="/service-details#" className="theme-btn">Read More</Link>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceV6;