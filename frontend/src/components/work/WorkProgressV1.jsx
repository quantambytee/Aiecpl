import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import WorkProgressV1Data from '../../jsonData/WorkProgressV1Data.json'
import SingleWorkProgressV1 from './SingleWorkProgressV1';

const WorkProgressV1 = () => {
    return (
        <>
            <section className="work-progress-area bgs-cover py-120 rpy-100" style={{ backgroundImage: "url(/images/background/work-progress.jpg)" }}>
                <div className="container">
                    <div className="work-progress-inner bg-blue text-white br-5 py-85 px-75">
                        <div className="section-title-with-btn mb-10">
                            <div className="section-title">
                                <span className="sub-title">How We Do</span>
                                <h2>Custom IT Solutions <br />for Your Business</h2>
                            </div>
                            <Link to="/contact#" className="theme-btn style-two mt-15">meet with us</Link>
                        </div>
                        <div className="row justify-content-between">
                            {WorkProgressV1Data.map(progress =>
                                <div className="col-lg-3 col-sm-6" key={progress.id}>
                                    <SingleWorkProgressV1 progress={progress} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkProgressV1;