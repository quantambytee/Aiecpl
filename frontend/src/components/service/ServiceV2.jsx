import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ServiceV2Data from '../../jsonData/ServiceV2Data.json'
import SingleServiceV2 from './SingleServiceV2';

const ServiceV2 = () => {
    return (
        <>
            <section className="services-section-two bg-blue pb-60">
                <div className="container">
                    <div className="service-two-wrap">
                        <div className="row">
                            {ServiceV2Data.map(service =>
                                <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small" key={service.id}>
                                    <SingleServiceV2 service={service} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="section-title-with-btn">
                        <div className="section-title text-white mb-10">
                            <h2>Preparing for your success <br />trusted source in IT services.</h2>
                        </div>
                        <Link to="/services#" className="theme-btn style-two mb-10">View All Services</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceV2;