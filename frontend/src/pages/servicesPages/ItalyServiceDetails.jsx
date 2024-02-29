import React from 'react';
// import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import StudyDetailsitalyContent from './StudyDetailsItalyContent';
// import FooterV2 from '../../components/footer/FooterV2';
import FooterV8 from '../../components/footer/FooterV8';
import HeaderMenuV1 from '../../components/header/HeaderMenuV1';
const ServicesDetails = () => {
    return (
        <>
            <HeaderMenuV1 />
            <BreadCums pageTitle="Italy Details" pageLink="italy-details" />
            <StudyDetailsitalyContent />
            <FooterV8 />
        </>
    );
};

export default ServicesDetails;