import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV4 = ({ service }) => {
    const { delay, thumb, category, category2, icon } = service;

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="service-item-four">
                    <div className="image">
                        <img src={`/images/services/${thumb}`} alt="Service" />
                    </div>
                    <div className="service-four-content">
                        <div className="service-title-area">
                            <span className="category">{category}</span>
                            <h3><Link to="/service-details#">{category2}</Link></h3>
                        </div>
                        <i className={icon}></i>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceV4;