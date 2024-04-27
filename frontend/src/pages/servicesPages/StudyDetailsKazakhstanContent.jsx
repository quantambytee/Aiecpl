import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";

import KazakshtanStudyFeature from "../../jsonData/KazakshtanStudyFeature.json";
import italyH from "../../assets/images/services/italyH.jpg";

const StudyDetailsKazakhstanContent = () => {
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
                      <li>
                        <Link to="#/">Study In Germany</Link>
                      </li>
                      <li>
                        <Link to="#">Study In Japan</Link>
                      </li>
                      <li>
                        <Link to="#">Study In Italy</Link>
                      </li>
                      <li>
                        <Link to="#">Study In Nepal</Link>
                      </li>
                      <li>
                        <Link to="#">Study In Belgium</Link>
                      </li>
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
                  <h2>Study in Kazakhstan</h2>
                  <p>
                    Kazakhstan, a unique Central Asian country, boasts a diverse
                    landscape that includes flatlands, steppe, rock canyons,
                    hills, deltas, snow-capped mountains, and deserts. The
                    country’s universities provide high-quality medical
                    education at affordable prices, attracting students from
                    around the world. Kazakhstan’s MCI approved medical
                    universities boast highly experienced faculty and staff who
                    offer extensive clinical practice to students. Additionally,
                    a plethora of affiliated hospitals provide practical
                    exposure to students before they begin their professional
                    careers.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Affordable Tuition Fee</li>
                    <li>Best Teacher-Student Ratio</li>
                    <li>Curriculum Designed as per International Standards</li>
                    <li>Globally Recognized Degree</li>
                    {/* <li>Holistic Approach to Education</li> */}
                  </ul>
                  <h3>Why Study in Kazakhstan?</h3>
                  <p>
                    Kazakhstan, with its rich history, diverse culture, and
                    growing education sector, offers a unique and dynamic
                    environment for international students. Here are several
                    compelling reasons why you should consider Kazakhstan for
                    your academic pursuits
                  </p>
                  <div className="row pt-25">
                    {KazakshtanStudyFeature.map((feature) => (
                      <div
                        className="col-xl-4 col-lg-6 col-md-4 col-sm-6"
                        key={feature.id}
                      >
                        <SingleServicesDetailsFeature feature={feature} />
                      </div>
                    ))}
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

export default StudyDetailsKazakhstanContent;
