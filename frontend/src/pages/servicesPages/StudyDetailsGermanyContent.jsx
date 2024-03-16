import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";
import FeatureV1Data from "../../jsonData/FeatureV1Data.json";
import GermanyStudyFeature from "../../jsonData/GermanyStudyFeature.json";
import italyH from "../../assets/images/services/italyH.jpg";
const ServicesDetailsGermanyContent = () => {
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
                  <h2>Study in Germany</h2>
                  <p>
                    Embarking on a venture to study in Germany is a significant
                    decision, one that opens doors to world-class education,
                    unparalleled research opportunities, and a global
                    perspective that shapes the future. At Admissionxprt, we
                    understand the aspirations and challenges that come with
                    pursuing education abroad, particularly in a country known
                    for its academic excellence and innovation. Our dedicated
                    team is here to guide you through every step, ensuring a
                    seamless experience as you embark on this exciting chapter
                    of your life. Join us in exploring the vibrant academic
                    landscape of Germany, where possibilities are endless, and
                    dreams become reality. Welcome to a future of growth,
                    learning, and success with Admissionxprt Education.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>
                      The Colosseum: the largest and most famous amphitheatre in
                      the Roman world, built in the first century AD.
                    </li>
                    <li>
                      Pompeii: a city that was covered in ash and soil in 79 AD
                      when the volcano Vesuvius erupted. The city was preserved
                      under the ashes.
                    </li>
                    <li>
                      Leaning Tower of Pisa: its construction started in 1173,
                      and soon after, the tower began to sink due to a poorly
                      laid foundation.
                    </li>
                    <li>
                      Lake Como: the lake is shaped like an inverted ‘Y’ and is
                      famous for the attractive villas built here since Roman
                      times.
                    </li>
                  </ul>
                  <h3>Why Study in Germany?</h3>
                  <p>
                    Choosing Germany for education offers a multitude of
                    compelling reasons, making it a highly sought-after
                    destination for students worldwide: Certainly, let’s delve
                    into more detail on why choosing Germany for education is a
                    compelling decision
                  </p>
                  <div className="row pt-25">
                    {GermanyStudyFeature.map((feature) => (
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

export default ServicesDetailsGermanyContent;
