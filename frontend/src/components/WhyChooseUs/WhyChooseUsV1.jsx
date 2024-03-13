import React from "react";
import { Fade, Zoom } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";
import whyChooseThumb from "/images/about/why-choose-mobile.png";
import shape1 from "/images/hero/hero-ten-1.png";
import shape2 from "/images/hero/hero-ten-2.png";
import shape3 from "/images/hero/hero-ten-3.png";
import shape4 from "/images/hero/hero-ten-4.png";
import discoverB from "../../assets/images/discoverB.jpg";
import discoverS from "../../assets/images/discoverS.png";
const WhyChooseUsV1 = () => {
  return (
    <>
      <section className="why-choose-us pb-130 rpb-100">
        <div className="container container-1635">
          <div className="why-choose-inner">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-5 col-lg-6">
                <Fade left delay={200}>
                  <div className="why-choose-content rel z-2 mb-55">
                    <div className="section-title mb-25">
                      <span className="sub-title-two mb-25">Why Choose Us</span>
                      <h2>Your Effortless Study Abroad Experience Awaits</h2>
                    </div>
                    <p>
                      At AIECPL, we believe in the power of language to bridge
                      cultures, foster understanding, and unlock a world of
                      opportunities. Our language coaching programs are designed
                      to equip learners with the skills and confidence they need
                      to navigate diverse linguistic landscapes with ease and
                      proficiency.
                    </p>
                    <div className="row pt-20 pb-5">
                      <div className="col-md-6">
                        <div className="why-choose-item">
                          <div className="icon">
                            <i className="flaticon flaticon-3d-printing"></i>
                          </div>
                          <div className="content">
                            <h3>Our Approach</h3>
                            <p>
                              At the heart of our approach to language coaching
                              lies a commitment to personalized learning
                              experiences. We understand that every learner is
                              unique, with individual goals, strengths, and
                              challenges. That's why our expert instructors
                              tailor each coaching session to the specific needs
                              and learning styles of our students.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="why-choose-item">
                          <div className="icon">
                            <i className="flaticon flaticon-like-1"></i>
                          </div>
                          <div className="content">
                            <h3>
                              Streamlined Application Processing with AIECPL
                            </h3>
                            <p>
                              At AIECPL, we understand that the application
                              process for studying abroad can be complex and
                              overwhelming. That's why we offer streamlined
                              application processing services to help you
                              navigate every step of the journey with ease and
                              confidence. Our experienced team is dedicated to
                              simplifying the application process, providing
                              guidance, and ensuring that your application
                              stands out among the rest.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="/#" className="theme-btn rtl-margin">
                      Go Back To The Home
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </Fade>
              </div>
              <div className="col-xl-7 col-lg-6">
                <Fade className="fadeInRight" delay={200}>
                  <div className="why-choose-images mb-55 images-with-shapes">
                    <Zoom delay={400}>
                      <img className="mobile" src={discoverB} alt="Mobile" />
                    </Zoom>
                    <img className="shape one" src={shape1} alt="Shape" />
                    <img className="shape two" src={shape2} alt="Shape" />
                    <img className="shape three" src={shape3} alt="Shape" />
                    <img className="shape four" src={discoverS} alt="Shape" />
                    <div className="circle-shapes-wrap">
                      <div className="circle-shape"></div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsV1;
