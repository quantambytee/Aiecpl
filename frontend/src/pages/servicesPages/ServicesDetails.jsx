import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServicesDetailsContent from './ServicesDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';

const ServicesDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Service Details" pageLink="Service-details" />
            <ServicesDetailsContent />
            <FooterV2 />
        </>
    );
};

export default ServicesDetails;