import React from 'react';
import PricingV8Data from '../../jsonData/PricingV8Data.json'
import SinglePricingPlanV8 from './SinglePricingPlanV8';

const PricingPlanV8 = () => {
    return (
        <>
            <section className="pricing-plan rel z-1 pt-75 rpt-50">
                <div className="container container-1250">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="section-title text-center mb-55">
                                <span className="sub-title-two mb-25">Pricing Plan</span>
                                <h2>We Provide an Awesome Pricing Package</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {PricingV8Data.map(plan =>
                            <div className="col-xl-3 col-lg-4 col-sm-6" key={plan.id}>
                                <SinglePricingPlanV8 plan={plan} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlanV8;