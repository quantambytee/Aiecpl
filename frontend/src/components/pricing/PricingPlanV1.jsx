import React from 'react';
import PricingV1Data from '../../jsonData/PricingV1Data.json'
import SinglePricingPlanV1 from './SinglePricingPlanV1';

const PricingPlanV1 = ({ partial = true, pricingClass }) => {
    return (
        <>
            <section className={`pricing-section pt-115 rpt-95 pb-90 rpb-70 ${pricingClass}`}>
                <div className="container">
                    <div className="section-title text-center mb-35">
                        <span className="sub-title">Pricing Packages</span>
                        <h2>Choose Your Best Plan</h2>
                    </div>
                    <div className="row justify-content-lg-center">
                        {partial &&
                            <>
                                {PricingV1Data.slice(0, 3).map(plan =>
                                    <div className="col-lg-4 col-sm-6" key={plan.id}>
                                        <SinglePricingPlanV1 plan={plan} />
                                    </div>
                                )}
                            </> ||
                            <>
                                {PricingV1Data.map(plan =>
                                    <div className="col-lg-4 col-sm-6" key={plan.id}>
                                        <SinglePricingPlanV1 plan={plan} />
                                    </div>
                                )}
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlanV1;