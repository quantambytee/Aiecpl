import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";

import BangladeshStudyFeature from "../../jsonData/BangladeshStudyFeature.json";
import italyH from "../../assets/images/services/italyH.jpg";
const StudyDetailsBangaladeshContent = () => {
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
                  <h2>Study in Bangladesh</h2>
                  <p>
                    Bangladesh, with its rich cultural heritage, warm
                    hospitality, and growing education sector, offers a
                    welcoming environment for international students. Here are
                    several compelling reasons why you should consider
                    Bangladesh for your academic pursuits
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Affordable Education</li>
                    <li>Diverse Academic Programs</li>
                    <li>Cultural Diversity</li>
                    <li>Growing Economy</li>
                    {/* <li>Holistic Approach to Education</li> */}
                  </ul>
                  <h3>Why Study in Bangladesh?</h3>
                  <p>
                    Bangladesh offers a wide range of study options to cater to
                    diverse interests and career aspirations. Whether you're
                    interested in undergraduate, postgraduate, or research
                    programs.
                  </p>
                  <div className="row pt-25">
                    {BangladeshStudyFeature.map((feature) => (
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

export default StudyDetailsBangaladeshContent;
