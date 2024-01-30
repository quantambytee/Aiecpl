import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV9 = ({ service }) => {
    const { icon, title, text, icon2 } = service

    return (
        <>
            <Fade className="fadeInUp">
                <div className="service-item-eight">
                    <div className="icon">
                        <img src={`/images/services/${icon}`} alt="Icon" />
                    </div>
                    <h3><Link to="/service-details#">{title}</Link></h3>
                    <p>{text}</p>
                    <Link to="/service-details#" className="learn-more">Read More<i className={icon2}></i></Link>
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceV9;