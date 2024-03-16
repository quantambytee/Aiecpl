import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";

import NepalStudyFeature from "../../jsonData/NepalStudyFeature.json";
import italyH from "../../assets/images/services/italyH.jpg";

const StudyDetailsNepalContent = () => {
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
                  <h2>Study in Nepal</h2>
                  <p>
                    Nepal has become a popular destination for medical students
                    who want to pursue their career as a doctor. The MBBS
                    programs offered by the government as well as private
                    institutions of the country are considered to be the best in
                    terms of budget-friendliness and quality. The admission
                    procedure is a simple process, unlike other countries where
                    students have to necessarily go through a complicated
                    admission structure. Indian students find it a lot more
                    convenient to study MBBS in Nepal as Hindi is a common
                    language spoken by both countries, and the culture is quite
                    similar too.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Natural Beauty</li>
                    <li>Rich Cultural Heritage</li>
                    <li>Academic Excellence</li>
                    <li>Affordable Education</li>
                    {/* <li>Holistic Approach to Education</li> */}
                  </ul>
                  <h3>Why Study in Nepal?</h3>
                  <p>
                    Nepal, nestled in the heart of the Himalayas, offers a
                    unique blend of natural beauty, cultural richness, and
                    academic excellence.
                  </p>
                  <div className="row pt-25">
                    {NepalStudyFeature.map((feature) => (
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

export default StudyDetailsNepalContent;
