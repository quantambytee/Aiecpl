import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";

import BulgariaStudyFeature from "../../jsonData/BulgariaStudyFeature.json";
import italyH from "../../assets/images/services/italyH.jpg";
const StudyDetailsBulgariaContent = () => {
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
                  <h2>Study in Bulgaria</h2>
                  <p>
                    Bulgaria is a country located in South-Eastern Europe and is
                    one of the most picturesque locations in Europe. From
                    beaches to mountain ranges, Bulgaria has a lot to offer to
                    tourists and international students.The history of Bulgaria
                    is long and tumultuous, and its effects can be seen in the
                    impressive ancient ruins that are a testimony to the rise
                    and fall of several civilizations. Architecture can be found
                    in many places all over the country.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>
                      The tuition fee is much more affordable as compared to
                      other EU countries.
                    </li>
                    <li>
                      The courses offered in Bulgaria are mostly in English.
                    </li>
                    <li>
                      The cost of living in Bulgaria is much less than in other
                      countries and education is more affordable.
                    </li>
                    <li>
                      The universities and colleges in Bulgaria offer an
                      education that meets all global standards.
                    </li>
                    {/* <li>Holistic Approach to Education</li> */}
                  </ul>
                  <h3>Why Study in Bulgaria?</h3>
                  <p>
                    Bulgaria is the ideal place to study and pursue higher
                    education. You can even study in Bulgaria without IELTS. You
                    just have to apply to one of the Bulgarian universities to
                    get a world-class education at a very affordable price. You
                    will also get to experience the rich culture of Bulgaria and
                    see one of the most beautiful countries in the world.
                    Bulgaria should be one of your top choices as a study abroad
                    country.
                  </p>
                  <div className="row pt-25">
                    {BulgariaStudyFeature.map((feature) => (
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

export default StudyDetailsBulgariaContent;
