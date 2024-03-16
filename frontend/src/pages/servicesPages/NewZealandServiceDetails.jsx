import React from "react";
// import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from "../../components/breadCums/BreadCums";
import StudyDetailsNewZealandContent from "./StudyDetailsNewZealandContent";
// import FooterV2 from '../../components/footer/FooterV2';
import FooterV8 from "../../components/footer/FooterV8";
import HeaderMenuV1 from "../../components/header/HeaderMenuV1";
const NewZealandServiceDetails = () => {
  return (
    <>
      <HeaderMenuV1 />
      <BreadCums pageTitle="NewZealand Details" pageLink="japan-details" />
      <StudyDetailsNewZealandContent />
      <FooterV8 />
    </>
  );
};

export default NewZealandServiceDetails;
