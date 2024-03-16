import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";

import JapanStudyFeature from "../../jsonData/JapanStudyFeature.json";
import italyH from "../../assets/images/services/italyH.jpg";
const ServicesDetailsJapanContent = () => {
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
                  <h2>Study in Japan</h2>
                  <p>
                    While studying in Japan offers invaluable academic and
                    cultural experiences, it's essential to consider the
                    financial aspects of your education. Budget for tuition
                    fees, living expenses, accommodation, health insurance, and
                    other miscellaneous costs. Explore scholarship
                    opportunities, part-time work options, and financial aid
                    programs to help finance your studies in Japan.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Engineering and Technology</li>
                    <li>Business and Economics</li>
                    <li>Japanese Studies and Language</li>
                    <li>Arts and Humanities</li>
                  </ul>
                  <h3>Why Study in Japan?</h3>
                  <p>
                    Japan, a land of ancient traditions and cutting-edge
                    technology, offers a unique and enriching experience for
                    international students. Here are several compelling reasons
                    why you should consider Japan for your academic pursuits
                  </p>
                  <div className="row pt-25">
                    {JapanStudyFeature.map((feature) => (
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

export default ServicesDetailsJapanContent;
