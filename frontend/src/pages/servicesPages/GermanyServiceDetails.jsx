import React from "react";
// import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from "../../components/breadCums/BreadCums";
import StudyDetailsGermanyContent from "./StudyDetailsGermanyContent";
// import FooterV2 from '../../components/footer/FooterV2';
import FooterV8 from "../../components/footer/FooterV8";
import HeaderMenuV1 from "../../components/header/HeaderMenuV1";
const GermanyServicesDetails = () => {
  return (
    <>
      <HeaderMenuV1 />
      <BreadCums pageTitle="Germany Details" pageLink="italy-details" />
      <StudyDetailsGermanyContent />
      <FooterV8 />
    </>
  );
};

export default GermanyServicesDetails;
