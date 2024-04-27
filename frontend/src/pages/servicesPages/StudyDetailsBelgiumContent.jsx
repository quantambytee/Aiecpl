import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";

import BelgiumStudyFeature from "../../jsonData/BelgiumStudyFeature.json";
import italyH from "../../assets/images/services/italyH.jpg";

const StudyDetailsBelgiumContent = () => {
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
                  <h2>Study in Belgium</h2>
                  <p>
                    Situated in the heart of Europe, Belgium not only boasts a
                    rich cultural tapestry but also stands as a testament to
                    economic prosperity and a high-quality lifestyle. The
                    country’s economic landscape is dynamic, driven by a diverse
                    range of industries that contribute to its status as one of
                    the most developed nations globally.Belgium’s strategic
                    location and well-established infrastructure have
                    transformed it into a hub for international trade. The
                    bustling ports of Antwerp and Zeebrugge play pivotal roles
                    in facilitating global commerce, while the country’s strong
                    logistics network enhances its position as an economic
                    powerhouse. Belgium’s economy is characterized by a healthy
                    balance of industries, including manufacturing, technology,
                    pharmaceuticals, and services.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Multicultural Environment</li>
                    <li>High-Quality Education</li>
                    <li>Central Location in Europe</li>
                    <li>Language Opportunities</li>
                    {/* <li>Holistic Approach to Education</li> */}
                  </ul>
                  <h3>Why Study in Belgium?</h3>
                  <p>
                    Belgium’s educational landscape is enriched by its
                    distinctive multilingual environment, offering students a
                    unique opportunity to immerse themselves in a linguistic
                    tapestry that reflects the nation’s cultural diversity. With
                    three official languages—Dutch, French, and German—Belgium
                    embraces a multilingual ethos that extends beyond the
                    confines of the classroom. Belgium’s commitment to
                    multilingualism extends beyond the academic realm,
                    permeating daily life, media, and governance. Language
                    courses are readily available, enabling international
                    students to enhance their language skills and fully
                    integrate into the vibrant cultural fabric. This
                    multilingual environment ensures that students graduate not
                    only with academic expertise but also with the ability to
                    communicate effectively in different languages—a skillset
                    highly valued in today’s interconnected world.
                  </p>
                  <div className="row pt-25">
                    {BelgiumStudyFeature.map((feature) => (
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

export default StudyDetailsBelgiumContent;
