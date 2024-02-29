import React from 'react';
import { Fade } from 'react-reveal';
import ContactV2Thumb from '../../components/contact/ContactV2Thumb';
import serviceDetailsThumb from '/images/services/service-details.jpg'
import { HashLink as Link } from 'react-router-hash-link';
import SingleServicesDetailsFeature from './SingleServicesDetailsFeature';
import FeatureV1Data from '../../jsonData/FeatureV1Data.json'
import italyH from "../../assets/images/services/italyH.jpg"
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
                                        <img src={italyH} alt="Service Details" />
                                    </div>
                                    <h2>Study in Italy</h2>
                                    <p>Italy has something to offer everyone. It boasts stunning old cities, the Mediterranean, and breathtaking natural views. Known for its fantastic food and wine, as well as its passionate people, it is also among the 8 most industrialized countries globally, hosting many of the world’s biggest companies and research facilities. Italy has a rich cultural 
                                        tradition and history, along with many World Heritage Sites that you might wish to visit during your stay.</p>
                                    <ul className="list-style-three pt-15 pb-30">
                                        <li>The Colosseum: the largest and most famous amphitheatre in the Roman world, built in the first century AD.</li>
                                        <li>Pompeii: a city that was covered in ash and soil in 79 AD when the volcano Vesuvius erupted. The city was preserved under the ashes.</li>
                                        <li>Leaning Tower of Pisa: its construction started in 1173, and soon after, the tower began to sink due to a poorly laid foundation.</li>
                                        <li>Lake Como: the lake is shaped like an inverted ‘Y’ and is famous for the attractive villas built here since Roman times.</li>
                                    </ul>
                                    <h3>Why Study in Italy?</h3>
                                    <p>Universities in Italy were founded in the 12th century, making them the oldest in the Western world. 
                                        The reorganization of the Italian education system originated the new concept of University institutions
                                         across the rest of Europe. With its strong historical aura, breathtaking sites, and diverse natural landscape,
                                          Italy is sure to provide international students with an enriching cultural experience. Italy offers a wide range of 
                                          courses, allowing students to pursue degree programs or certificate programs online, through distance learning, or 
                                          facilitated through classrooms across the country. Top-rated programs, professors, and facilities
                                         enable students to find professional success. Due to these and more reasons, students are opting to study in Italy. </p>
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