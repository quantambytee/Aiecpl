import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";

import PolandStudyFeature from "../../jsonData/PolandStudyFeature.json";
import italyH from "../../assets/images/services/italyH.jpg";

const StudyDetailsPolandContent = () => {
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
                  <h2>Study in Poland</h2>
                  <p>
                    Embark on a transformative educational journey in the heart
                    of Europe by selecting Poland as your study destination.
                    Renowned for its rich cultural heritage, vibrant academic
                    environment, and warm hospitality, Poland offers a unique
                    and enriching experience for international students. Poland
                    boasts a rich academic tradition with universities
                    consistently ranked among the top in global university
                    rankings. Institutions like the University of Warsaw,
                    Jagiellonian University, and Warsaw University of Technology
                    are known for their high academic standards.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Diverse Range of Programs</li>
                    <li>Academic Excellence</li>
                    <li>Gateway to Europe</li>
                    <li>Affordability</li>
                    {/* <li>Holistic Approach to Education</li> */}
                  </ul>
                  <h3>Why Study in Poland?</h3>
                  <p>
                    In essence, cultural immersion is woven into the fabric of
                    student life in Poland. Beyond academics, students discover
                    a welcoming and diverse cultural landscape that enhances
                    their personal growth and global perspective. Studying in
                    Poland isn’t just about earning a degree; it’s about
                    embracing a dynamic and enriching cultural experience that
                    lasts a lifetime. One of the key advantages of studying in
                    Poland is the affordability of tuition fees compared to many
                    Western European countries. Tuition fees vary based on the
                    level of study, the university, and the chosen program. On
                    average, tuition fees for Bachelor’s programs range from
                    €2,000 to €4,000 per year, while Master’s programs may range
                    from €2,500 to €5,000 per year. However, specific programs,
                    especially in fields like medicine or business, may have
                    higher fees.
                  </p>
                  <div className="row pt-25">
                    {PolandStudyFeature.map((feature) => (
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

export default StudyDetailsPolandContent;
