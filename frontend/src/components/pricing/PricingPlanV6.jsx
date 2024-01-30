import React from 'react';
import SinglePricingPlanV6 from './SinglePricingPlanV6';
import PricingV6Data from '../../jsonData/PricingV6Data.json'

const PricingPlanV6 = () => {
    return (
        <>
            <section className="pricing-section-six text-center pt-115 rpt-95 pb-90 rpb-70">
                <div className="container">
                    <div className="section-title mb-100 rmb-55">
                        <span className="sub-title">Pricing Plan</span>
                        <h2>We give a great assessing plan <br />to the application</h2>
                    </div>
                    <div className="row">
                        {PricingV6Data.map(plan =>
                            <div className="col-lg-4 col-sm-6" key={plan.id}>
                                <SinglePricingPlanV6 plan={plan} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlanV6;