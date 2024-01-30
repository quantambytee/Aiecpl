import React from 'react';
import ServiceV7Data from '../../jsonData/ServiceV7Data.json'
import SingleServiceV7 from './SingleServiceV7';

const ServiceV7 = () => {
    return (
        <>
            <section className="what-we-do-two text-center pt-115 rpt-95 pb-90 rpb-70">
                <div className="container">
                    <div className="section-title mb-55">
                        <span className="sub-title">What We Do</span>
                        <h2>Highlights that Help you <br />construct better</h2>
                    </div>
                    <div className="row">
                        {ServiceV7Data.map(service =>
                            <div className="col-lg-3 col-sm-6" key={service.id}>
                                <SingleServiceV7 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceV7;