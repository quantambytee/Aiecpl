import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV8 = ({ service }) => {
    const { thumb, title, icon } = service

    return (
        <>
            <div className="service-item-seven">
                <img src={`/images/services/${thumb}`} alt="Service" />
                <h3>{title}</h3>
                <Link to="/service-details#" className="read-more">Click Here<i className={icon}></i></Link>
            </div>
        </>
    );
};

export default SingleServiceV8;