import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServiceV3 from '../../components/service/ServiceV3';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Services3 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Services Three" pageLink="Services-3" />
            <ServiceV3 />
            <PricingPlanV2 />
            <WorkProgressV6 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services3;