import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePricingPlanV6 = ({ plan }) => {
    const { title, price, discount, text1, text2, icon, delay } = plan

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="pricing-item-six">
                    <h5 className="pricing-title">{title}</h5>
                    <span className="price">{price}</span>
                    <span className="save-up">{discount}</span>
                    <p>{text1} <br />{text2}</p>
                    <Link to="/pricing-6#" className="home-six theme-btn" >Choose Now <i className={icon}></i></Link>
                </div>
            </Fade>
        </>
    );
};

export default SinglePricingPlanV6;