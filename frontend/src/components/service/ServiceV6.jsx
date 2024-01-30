import React from 'react';
import ServiceV1Data from '../../jsonData/ServiceV1Data.json'
import SingleServiceV6 from './SingleServiceV6';

const ServiceV6 = () => {
    return (
        <>
            <section className="who-we-are overlay text-white text-center pt-115 rpt-95 pb-90 rpb-70">
                <div className="container">
                    <div className="section-title mb-65">
                        <span className="sub-title">WHO WE ARE</span>
                        <h2>We deal with the aspects of <br />professional IT pros</h2>
                    </div>
                    <div className="row">
                        {ServiceV1Data.slice(0, 4).map(service =>
                            <div className="col-xl-3 col-md-6" key={service.id}>
                                <SingleServiceV6 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceV6;