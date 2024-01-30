import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV10 = ({ service }) => {
    const { icon, icon2, title, text, delay } = service

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="service-box style-two">
                    <div className="service-normal">
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <Link to="/service-details#" className="theme-btn style-six rtl-margin">Read More <i className={icon2}></i></Link>
                    </div>
                    <div className="circle-shapes-wrap">
                        <div className="circle-shape"></div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceV10;