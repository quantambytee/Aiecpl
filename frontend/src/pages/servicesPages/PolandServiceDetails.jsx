import React from "react";
// import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from "../../components/breadCums/BreadCums";
import StudyDetailsPolandContent from "./StudyDetailsPolandContent";
// import FooterV2 from '../../components/footer/FooterV2';
import FooterV8 from "../../components/footer/FooterV8";
import HeaderMenuV1 from "../../components/header/HeaderMenuV1";

const PolandServiceDetails = () => {
  return (
    <>
      <HeaderMenuV1 />
      <BreadCums pageTitle="Poland Details" pageLink="japan-details" />
      <StudyDetailsPolandContent />
      <FooterV8 />
    </>
  );
};

export default PolandServiceDetails;
