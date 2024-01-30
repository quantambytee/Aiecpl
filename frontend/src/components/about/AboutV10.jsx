import React from 'react';
import { Fade } from 'react-reveal';
import aboutTenThumb from '/images/about/about-ten.jpg'
import AboutV10Data from '../../jsonData/AboutV10Data.json'
import SingleAboutV10 from './SingleAboutV10';

const AboutV10 = () => {
    return (
        <>
            <section className="about-section-ten pt-130 rpt-100">
                <div className="container container-1250">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-md-6">
                            <Fade className="fadeInRight" delay={200}>
                                <div className="about-shape-ten mb-55 images-with-shapes">
                                    <div className="image">
                                        <img src={aboutTenThumb} alt="About" />
                                    </div>
                                    <div className="circle-shapes-wrap">
                                        <div className="circle-shape"></div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-xl-5 col-md-6">
                            <Fade className="fadeInLeft" delay={200}>
                                <div className="about-ten-content mb-55">
                                    <div className="section-title mb-25">
                                        <span className="sub-title-two mb-25">Who We Are</span>
                                        <h2>We Provide All Solutions In One Application</h2>
                                    </div>
                                    <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam eaque quae ainventore veritatis et quasi architecto beatae vitae dicta sunte</p>
                                    <div className="row">
                                        {AboutV10Data.map(about =>
                                            <div className="col-sm-4 col-6 col-small" key={about.id}>
                                                <SingleAboutV10 about={about} />
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

export default AboutV10;