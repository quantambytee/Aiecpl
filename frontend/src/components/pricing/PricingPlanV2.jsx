import React from 'react';
import PricingV1Data from '../../jsonData/PricingV1Data.json'
import SinglePricingPlanV2 from './SinglePricingPlanV2';

const PricingPlanV2 = ({ partial = true, pricingClass }) => {
    return (
        <>
            <section className={`pricing-section-two pt-115 rpt-95 pb-70 rpb-50 ${pricingClass}`}>
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <span className="sub-title">Pricing Packages</span>
                        <h2>Choose Your Best Plan</h2>
                    </div>
                    <div className="row">
                        {partial &&
                            <>
                                {PricingV1Data.slice(0, 3).map(plan =>
                                    <div className="col-lg-4 col-sm-6" key={plan.id}>
                                        <SinglePricingPlanV2 plan={plan} />
                                    </div>
                                )}
                            </> ||
                            <>
                                {PricingV1Data.map(plan =>
                                    <div className="col-lg-4 col-sm-6" key={plan.id}>
                                        <SinglePricingPlanV2 plan={plan} />
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

export default PricingPlanV2;