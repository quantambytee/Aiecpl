import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePricingPlanV8 = ({ plan }) => {
    const { title, icon, price, list1, list2, list3, list4, icon2, delay } = plan

    return (
        <>
            <Fade delay={delay}>
                <div className="pricing-item-eight">
                    <h3 className="pricing-title">{title}</h3>
                    <div className="image"><img src={`/images/shapes/${icon}`} alt="Gift" /></div>
                    <span className="price"><span>${price} /</span>monthly</span>
                    <ul className="list-style-three">
                        <li>{list1}</li>
                        <li className="unchecked">{list2}</li>
                        <li className="unchecked">{list3}</li>
                        <li className="unchecked">{list4}</li>
                    </ul>
                    <Link to="/pricing-6#" className="theme-btn style-six rtl-margin">Choose Plan <i className={icon2}></i></Link>
                </div>
            </Fade>
        </>
    );
};

export default SinglePricingPlanV8;