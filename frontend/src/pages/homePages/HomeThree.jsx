import React from 'react';
import HeaderMenu3 from '../../components/header/HeaderMenu3';
import BannerV3 from '../../components/banner/BannerV3';
import ServiceV4 from '../../components/service/ServiceV4';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import AboutV3 from '../../components/about/AboutV3';
import TeamV2 from '../../components/team/TeamV2';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
// import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
// import SubscribeV1 from '../../components/subscribe/SubscribeV1';
// import GalleryV3 from '../../components/gallery/GalleryV3';
// import BlogV2 from '../../components/blog/BlogV2';
import ContactV2 from '../../components/contact/ContactV2';
import FooterV3 from '../../components/footer/FooterV3';

const HomeThree = () => {
    return (
        <>
            <HeaderMenu3 />
            <BannerV3 />
            <ServiceV4 serviceSpace="pb-210" />
            <WorkProgressV3 />
            <AboutV3 aboutClass="py-120 rpy-100" />
            <TeamV2 teamClass="has-bg" />
            <TestimonialV1 />
            {/* <PricingPlanV2 /> */}
            {/* <SubscribeV1 subscribeSpace="pt-115 rpt-95" /> */}
            {/* <GalleryV3 /> */}
            {/* <BlogV2 blogClass="pb-10 rpb-25" /> */}
            <ContactV2 />
            <FooterV3 />
        </>
    );
};

export default HomeThree;