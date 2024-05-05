import React from "react";
import InnerHeader from "../../components/header/HeaderMenuV1";
import BreadCums from "../../components/breadCums/BreadCums";
import AboutV3 from "../../components/about/AboutV8";
// import WorkProgressV3 from "../../components/work/WorkProgressV3";
// import TestimonialV1 from "../../components/testimonial/TestimonialV1";
// import ContactV4 from "../../components/contact/ContactV4";
import FeatureV1 from "../../components/feature/FeatureV1";
import FooterV8 from "../../components/footer/FooterV8";

const About = () => {
  return (
    <>
      <InnerHeader />
      <BreadCums pageTitle="Abroad & Universities" pageLink="about" />
      <AboutV3 aboutClass="pt-120 rpt-100 pb-240 rpb-150" />
      <FeatureV1 />
      {/* <TestimonialV1 /> */}
      {/* <ContactV4 /> */}
      <FooterV8 />
    </>
  );
};

export default About;
