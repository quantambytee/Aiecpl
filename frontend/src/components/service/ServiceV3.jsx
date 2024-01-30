import React from 'react';
import ServiceV1Data from '../../jsonData/ServiceV1Data.json'
import SingleServiceV3 from './SingleServiceV3';
import { HashLink as Link } from 'react-router-hash-link';

const ServiceV3 = () => {
    return (
        <>
            <section className="services-three bg-light-black text-white pt-115 rpt-95 pb-180 rpb-150">
                <div className="container">
                    <div className="section-title-with-btn mb-55">
                        <div className="section-title">
                            <span className="sub-title">It Support For Business</span>
                            <h2>It Support For Business</h2>
                        </div>
                        <Link to="/services#" className="theme-btn style-four mt-15">view all services</Link>
                    </div>
                    <div className="row">
                        {ServiceV1Data.slice(0, 4).map(service =>
                            <div className="col-lg-3 col-sm-6" key={service.id}>
                                <SingleServiceV3 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceV3;