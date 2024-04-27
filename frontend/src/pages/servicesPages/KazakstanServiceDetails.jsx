import React from "react";
// import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from "../../components/breadCums/BreadCums";
import StudyDetailsKazakhstanContent from "./StudyDetailsKazakhstanContent";
// import FooterV2 from '../../components/footer/FooterV2';
import FooterV8 from "../../components/footer/FooterV8";
import HeaderMenuV1 from "../../components/header/HeaderMenuV1";
const KazakhstanServiceDetails = () => {
  return (
    <>
      <HeaderMenuV1 />
      <BreadCums pageTitle="Kazakhstan Details" pageLink="japan-details" />
      <StudyDetailsKazakhstanContent />
      <FooterV8 />
    </>
  );
};

export default KazakhstanServiceDetails;
