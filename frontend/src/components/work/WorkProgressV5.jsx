import React from 'react';
import WorkProgressV5Data from '../../jsonData/WorkProgressV5Data.json'
import SingleWorkProgressV5 from './SingleWorkProgressV5';

const WorkProgressV5 = () => {
    return (
        <>
            <section className="work-progress-area-five rel z-1 pt-110 pb-90 rpt-90 rpb-70">
                <div className="container">
                    <div className="section-title text-center mb-65">
                        <span className="sub-title">How It Works</span>
                        <h2>Create and Sell Your NFTs</h2>
                    </div>
                    <div className="row">
                        {WorkProgressV5Data.map(progress =>
                            <div className="col-xl-3 col-lg-4 col-sm-6" key={progress.id}>
                                <SingleWorkProgressV5 progress={progress} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkProgressV5;