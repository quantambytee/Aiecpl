import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PricingV7Data from '../../jsonData/PricingV7Data.json'
import SinglePricingPlanV7 from './SinglePricingPlanV7';

const PricingPlanV7 = () => {

    const [isYearlyActive, setIsYearlyActive] = useState(false);

    const handleTabClick = (target) => {
        if (target === '#yearly') {
            setIsYearlyActive(true);
        } else if (target === '#monthly') {
            setIsYearlyActive(false);
        }
    }

    return (
        <>
            <section className="pricing-seven rel z-1 pt-130 pb-120 rpt-80 rpb-70" style={{ backgroundImage: "url(/images/background/pricing-seven-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                            <div className="section-title text-center mb-30">
                                <span className="sub-title">06 Pricing Plan</span>
                                <h2>The prices are best! its Unbelievable</h2>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className={`nav pricing-tab mb-80 ${isYearlyActive ? 'for-yearly' : ''}`}>
                            <Link data-bs-target="#yearly" data-bs-toggle="tab" onClick={() => handleTabClick('#yearly')}>Yearly</Link>
                            <Link data-bs-target="#monthly" data-bs-toggle="tab" className={`${isYearlyActive ? '' : 'active show'}`} onClick={() => handleTabClick('#monthly')}>Monthly</Link>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade" id="yearly">
                            <div className="row">
                                {PricingV7Data.slice(0, 3).map(plan =>
                                    <div className="col-lg-4 col-md-6" key={plan.id}>
                                        <SinglePricingPlanV7 plan={plan} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="tab-pane fade active show" id="monthly">
                            <div className="row">
                                {PricingV7Data.slice(3, 6).map(plan =>
                                    <div className="col-lg-4 col-md-6" key={plan.id}>
                                        <SinglePricingPlanV7 plan={plan} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-drop"></div>
            </section>
        </>
    );
};

export default PricingPlanV7;