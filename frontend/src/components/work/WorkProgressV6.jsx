import React from 'react';
import WorkProgressV3Inner from './WorkProgressV3Inner';

const WorkProgressV6 = () => {
    return (
        <>
            <section className="work-progress-three bg-blue text-white pt-115 rpt-95 pb-85 rpb-65" style={{ backgroundImage: "url(/images/background/progress.png)" }}>
                <div className="container">
                    <div className="section-title text-center mb-35">
                        <span className="sub-title">How We Do</span>
                        <h2>Custom IT Solutions <br />for Your Business</h2>
                    </div>
                    <WorkProgressV3Inner />
                </div>
            </section>
        </>
    );
};

export default WorkProgressV6;