import React from "react";
// import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from "../../components/breadCums/BreadCums";
import StudyDetailsBelgiumContent from "./StudyDetailsBelgiumContent";
// import FooterV2 from '../../components/footer/FooterV2';
import FooterV8 from "../../components/footer/FooterV8";
import HeaderMenuV1 from "../../components/header/HeaderMenuV1";

const BelgiumServiceDetails = () => {
  return (
    <>
      <HeaderMenuV1 />
      <BreadCums pageTitle="Belgium Details" pageLink="japan-details" />
      <StudyDetailsBelgiumContent />
      <FooterV8 />
    </>
  );
};

export default BelgiumServiceDetails;
