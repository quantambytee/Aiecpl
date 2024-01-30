import React from 'react';
import { Fade } from 'react-reveal';
import ContactV2Thumb from '../../components/contact/ContactV2Thumb';
import serviceDetailsThumb from '/images/services/service-details.jpg'
import { HashLink as Link } from 'react-router-hash-link';
import SingleServicesDetailsFeature from './SingleServicesDetailsFeature';
import FeatureV1Data from '../../jsonData/FeatureV1Data.json'

const ServicesDetailsContent = () => {
    return (
        <>
            <section className="service-details pt-120 rpt-100 pb-100 rpb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Fade left delay={200}>
                                <div className="service-sidebar rmb-55">
                                    <div className="widget widget-services">
                                        <ul>
                                            <li><Link to="#">Data Center</Link></li>
                                            <li><Link to="#">IT Management</Link></li>
                                            <li><Link to="#">Software Development</Link></li>
                                            <li><Link to="#">Web Development</Link></li>
                                            <li><Link to="#">Cloud Services</Link></li>
                                        </ul>
                                    </div>
                                    <ContactV2Thumb />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-8">
                            <Fade right delay={200}>
                                <div className="service-details-content">
                                    <div className="image mb-40">
                                        <img src={serviceDetailsThumb} alt="Service Details" />
                                    </div>
                                    <h2>Cloud Services</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate </p>
                                    <ul className="list-style-three pt-15 pb-30">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum dolor</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum dolor</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum dolor</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum dolor</li>
                                    </ul>
                                    <h3>Explore our audit & assurance services</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate </p>
                                    <div className="row pt-25">
                                        {FeatureV1Data.slice(0, 3).map(feature =>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6" key={feature.id}>
                                                <SingleServicesDetailsFeature feature={feature} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesDetailsContent;