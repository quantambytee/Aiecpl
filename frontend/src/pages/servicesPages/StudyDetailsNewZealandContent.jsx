import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";

import NewZealandStudyFeature from "../../jsonData/NewZealandStudyFeature.json";
import italyH from "../../assets/images/services/italyH.jpg";
const ServicesDetailsNewZealandContent = () => {
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
                  <h2>Study in New Zealand</h2>
                  <p>
                    New Zealand’s education system is globally recognized for
                    its excellence, providing a diverse and innovative learning
                    environment. Structured around a three-tier system—primary,
                    secondary, and tertiary—the country emphasizes practical
                    learning and critical thinking. The tertiary education
                    sector comprises universities, institutes of technology, and
                    polytechnics, offering a wide range of undergraduate and
                    postgraduate programs. Renowned for its research-oriented
                    approach, New Zealand’s universities consistently rank high
                    globally. The academic calendar aligns with international
                    standards, providing students with flexibility and
                    opportunities for research and extracurricular activities.
                    Overall, New Zealand’s education system ensures a
                    well-rounded and globally competitive learning experience.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>World-Class Universities</li>
                    <li>Quality Assurance Mechanisms</li>
                    <li>JInnovative Teaching and Learning</li>
                    <li>Research Opportunities</li>
                    <li>Holistic Approach to Education</li>
                  </ul>
                  <h3>Why Study in New Zealand?</h3>
                  <p>
                    New Zealand, with its breathtaking landscapes, vibrant
                    cities, and high-quality education system, offers an
                    enriching experience for students from around the world.
                    Here are some compelling reasons to choose New Zealand for
                    your study adventure
                  </p>
                  <div className="row pt-25">
                    {NewZealandStudyFeature.map((feature) => (
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

export default ServicesDetailsNewZealandContent;
