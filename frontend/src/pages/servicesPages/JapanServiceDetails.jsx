import React from "react";
// import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from "../../components/breadCums/BreadCums";
import StudyDetailsJapanContent from "./StudyDetailsJapanContent";
// import FooterV2 from '../../components/footer/FooterV2';
import FooterV8 from "../../components/footer/FooterV8";
import HeaderMenuV1 from "../../components/header/HeaderMenuV1";
const JapanServiceDetails = () => {
  return (
    <>
      <HeaderMenuV1 />
      <BreadCums pageTitle="Japan Details" pageLink="japan-details" />
      <StudyDetailsJapanContent />
      <FooterV8 />
    </>
  );
};

export default JapanServiceDetails;
