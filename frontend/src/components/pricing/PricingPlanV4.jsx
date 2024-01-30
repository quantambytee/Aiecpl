import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import PricingV4Data from '../../jsonData/PricingV4Data.json'
import SinglePricingPlanV4 from './SinglePricingPlanV4';

const PricingPlanV4 = () => {
    return (
        <>
            <section className="pricing-section-five bgs-cover bg-blue pt-120 rpt-95 pb-90 rpb-70" style={{ backgroundImage: "url(/images/background/price-five-bg.png)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-8">
                            <Fade className="fadeInUp" delay={300}>
                                <div className="price-five-content text-white rmb-55">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">Pricing Packages</span>
                                        <h2>Choose Best Plan</h2>
                                    </div>
                                    <p>Epsum dolor sit amet consectetur adipisicing seddo eiusmod tempor incididunt labore dolore magna aliqua enim ad minim veniam</p>
                                    <ul className="nav nav-tabs price-five-tab">
                                        <div className="monthly-yearly mt-15 mb-30">
                                            <li className='nav-item' role='presentation'>
                                                <div className="custom-control custom-radio mr-15">
                                                    <input type="radio" id="monthly" name="month-year" className="custom-control-input active" data-bs-toggle="tab" data-bs-target="#tabContent1" defaultChecked />
                                                    <label className="custom-control-label ms-2" htmlFor="monthly">monthly</label>
                                                </div>
                                            </li>

                                            <li className='nav-item' role='presentation'>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="yearly" name="month-year" className="custom-control-input" data-bs-toggle="tab" data-bs-target="#tabContent2" />
                                                    <label className="custom-control-label ms-2" htmlFor="yearly">yearly</label>
                                                </div>
                                            </li>
                                        </div>
                                    </ul>
                                    <p>Amet consectetur adipisicing seddo eiusmod tempor incididunt labore dolore</p>
                                    <Link to="/pricing-5#" className="theme-btn style-two mt-10">learn more</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content about-tab-content">
                                <div className="tab-pane fade show active" id="tabContent1" role="tabpanel">
                                    <div className="row align-items-center">
                                        {PricingV4Data.slice(0, 2).map(plan =>
                                            <div className="col-lg-6 col-sm-6" key={plan.id}>
                                                <SinglePricingPlanV4 plan={plan} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tabContent2" role="tabpanel">
                                    <div className="row align-items-center">
                                        {PricingV4Data.slice(2, 4).map(plan =>
                                            <div className="col-lg-6 col-sm-6" key={plan.id}>
                                                <SinglePricingPlanV4 plan={plan} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlanV4;