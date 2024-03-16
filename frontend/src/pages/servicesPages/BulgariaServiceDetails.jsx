import React from "react";
// import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from "../../components/breadCums/BreadCums";
import StudyDetailsBulgariaContent from "./StudyDetailsBulgariaContent";
// import FooterV2 from '../../components/footer/FooterV2';
import FooterV8 from "../../components/footer/FooterV8";
import HeaderMenuV1 from "../../components/header/HeaderMenuV1";
const BulgariaServiceDetails = () => {
  return (
    <>
      <HeaderMenuV1 />
      <BreadCums pageTitle="Bulgaria Details" pageLink="japan-details" />
      <StudyDetailsBulgariaContent />
      <FooterV8 />
    </>
  );
};

export default BulgariaServiceDetails;
