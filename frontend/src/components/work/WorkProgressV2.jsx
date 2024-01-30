import React from 'react';
import WorkProgressV1Data from '../../jsonData/WorkProgressV1Data.json'
import SingleWorkProgressV2 from './SingleWorkProgressV2';

const WorkProgressV2 = () => {
    return (
        <>
            <section className="work-progress-two">
                <div className="container">
                    <div className="work-progress-inner-two">
                        <div className="row justify-content-lg-center">
                            {WorkProgressV1Data.map(progress =>
                                <div className="col-lg-4 col-sm-6" key={progress.id}>
                                    <SingleWorkProgressV2 progress={progress} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkProgressV2;