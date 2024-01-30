import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Fade } from 'react-reveal';

const SinglePricingPlanV1 = ({ plan }) => {
    const { title, price, duration, list1, list2, list3, list4, delay } = plan;

    return (
        <>
            <Fade delay={delay} className="fadeInUp">
                <div className="pricing-item">
                    <div className="pricing-header">
                        <h5 className="pricing-title">{title}</h5>
                        <span className="price">{price}</span>
                        <h5 className="pricing-time">{duration}</h5>
                    </div>
                    <ul>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                        <li>{list4}</li>
                    </ul>
                    <Link to="/pricing#" className="theme-btn btn-circle">Choose Plan</Link>
                </div>
            </Fade>
        </>
    );
};

export default SinglePricingPlanV1;