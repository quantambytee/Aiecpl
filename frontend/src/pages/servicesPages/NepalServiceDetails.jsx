import React from "react";
// import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from "../../components/breadCums/BreadCums";
import StudyDetailsNepalContent from "./StudyDetailsNepalContent";
// import FooterV2 from '../../components/footer/FooterV2';
import FooterV8 from "../../components/footer/FooterV8";
import HeaderMenuV1 from "../../components/header/HeaderMenuV1";
const BangaladeshServiceDetails = () => {
  return (
    <>
      <HeaderMenuV1 />
      <BreadCums pageTitle="Nepal Details" pageLink="japan-details" />
      <StudyDetailsNepalContent />
      <FooterV8 />
    </>
  );
};

export default BangaladeshServiceDetails;
