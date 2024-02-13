import React from 'react';
import { Fade } from 'react-reveal';
import ContactV2Thumb from '../../components/contact/ContactV2Thumb';
import serviceDetailsThumb from '/images/services/service-details.jpg'
import { HashLink as Link } from 'react-router-hash-link';
import SingleServicesDetailsFeature from './SingleServicesDetailsFeature';
import FeatureV1Data from '../../jsonData/FeatureV1Data.json'
import Aus from "../../assets/images/services/Aus.jpg"
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
                                            <li><Link to="#/">Study In Germany</Link></li>
                                            <li><Link to="#">Study In Japan</Link></li>
                                            <li><Link to="#">Study In Italy</Link></li>
                                            <li><Link to="#">Study In Nepal</Link></li>
                                            <li><Link to="#">Study In Belgium</Link></li>
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
                                        <img src={Aus} alt="Service Details" />
                                    </div>
                                    <h2>Study in Australia</h2>
                                    <p>Australia is a popular destination for international students, ranking as the third most popular global choice 
                                        for higher education. According to the Universities 2019 U21 ranking of National Higher Education Systems,
                                         Australia's education system holds the impressive 8th position, surpassing countries such as France, 
                                         Germany, Norway, and Japan. Beyond its status as a melting pot of diverse cultures and breath taking landscapes, 
                                         Australia presents abundant career opportunities. The educational programs are designed to equip students for 
                                         various industries, contributing to the high value placed on degrees from Australian universities by employers. </p>
                                    <ul className="list-style-three pt-15 pb-30">
                                        <li>Australia is home to some of the world&nbsp;s top-ranking universities known 
                                            for their academic excellence and innovative teaching methods.</li>
                                        <li>Australian degrees are globally recognized and respected, opening doors to 
                                            opportunities for further studies and employment worldwide.</li>
                                        <li>Investigate the career services offered by the university. Look into 
                                            the employability rates of graduates and the success stories of alumni in your chosen field.</li>
                                        <li>Research the scholarships and financial aid options offered by the university. 
                                            This can significantly contribute to managing the cost of education.</li>
                                    </ul>
                                    <h3>Reasons to Choose Australia for Education</h3>
                                    <p>Australia stands out globally as an education hub known for its high-quality academic structure and 
                                        progressive policy advancements. With over 1,100 institutions offering more than 22,000 courses
                                         tailored for international students, Australia is considered one of the best places to live. All major cities in Australia rank among the world's top 100 student cities according to QS Best Student Cities 2019. Students consistently report high satisfaction scores, 
                                        describing the locals as open, friendly, and warm, making studying in Australia akin to finding a second home. </p>
                                    <div className="row pt-25">
                                        {FeatureV1Data.map(feature =>
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