import React from "react";
import aboutSevenThumb from "/images/about/about-seven.png";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import abroad from "../../assets/images/abroad.jpeg";

const AboutV8 = (props) => {
  const { aboutSpace } = props;
  console.log("props", props);
  const location = useLocation();
  // const { title } = location.state || {};
  // console.log("location", location.state);
  // console.log("location", title);
  return (
    <>
      <section className={`about-seven rel z-1 pt-150 rpt-30 ${aboutSpace}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-seven-image rmb-60">
                <img src={abroad} alt="About" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-seven-content">
                <div className="section-title mb-30">
                  <h2 style={{ fontSize: "34px" }}>
                    Navigating Global Education
                  </h2>
                  {/* <span className="sub-title">
                    Most experienced overseas education consultant in India
                  </span> */}
                </div>
                <p>
                  Welcome to AIECPL, your trusted guide in navigating the
                  complex landscape of global education. With decades of
                  experience and a proven track record of success, we are proud
                  to be recognized as the most experienced overseas education
                  consultant in India. Whether you're a student aspiring to
                  study abroad, a researcher seeking international
                  collaborations, or an institution looking to expand your
                  global footprint, we are here to support you every step of the
                  way.
                </p>
                <ul className="list-style-three mt-35 mb-50">
                  <li>Expert Guidance</li>

                  <li>Comprehensive Services</li>
                  <li>Extensive Network</li>
                  <li>Customized Solutions</li>
                  <li>Transparent Process</li>
                  <li>Continued Suppor</li>
                </ul>
                {/* <Link to="/contact#" className="theme-btn style-eight">
                  Start Free Trial{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="circle-drop"></div>
      </section>
    </>
  );
};

export default AboutV8;
