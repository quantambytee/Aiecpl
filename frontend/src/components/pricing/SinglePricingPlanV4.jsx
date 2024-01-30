import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePricingPlanV4 = ({ plan }) => {
    const { label, title, price, duration, list1, list2, list3, list4 } = plan

    return (
        <>
            <Fade className="fadeInUp" delay={100}>
                <div className="pricing-item-three">
                    <span className="pricing-type">{label}</span>
                    <div className="pricing-header">
                        <h5 className="pricing-title">{title}</h5>
                        <div className="icon">
                            <i className="flaticon-web-traffic-1"></i>
                        </div>
                        <span className="price">{price}</span>
                        <h5 className="pricing-time">{duration}</h5>
                    </div>
                    <ul>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                        <li>{list4}</li>
                    </ul>
                    <Link to="/pricing-5#" className="theme-btn">Choose Plan</Link>
                </div>
            </Fade>
        </>
    );
};

export default SinglePricingPlanV4;