import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePricingPlanV7 = ({ plan }) => {
    const { title, text, price, list1, list2, list3, btnText } = plan

    return (
        <>
            <div className="pricing-item-seven">
                <div className="pricing-top">
                    <div className="price-top-left">
                        <h4 className="pricing-title">{title}</h4>
                        <span>{text}</span>
                    </div>
                    <span className="price">{price}</span>
                </div>
                <ul className="list-style-three">
                    <li>{list1}</li>
                    <li>{list2}</li>
                    <li>{list3}</li>
                </ul>
                <Link to="#" className="theme-btn style-six">{btnText}</Link>
            </div>
        </>
    );
};

export default SinglePricingPlanV7;