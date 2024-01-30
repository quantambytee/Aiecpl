import React from 'react';
import HeaderMenu5 from '../../components/header/HeaderMenu5';
import BannerV5 from '../../components/banner/BannerV5';
import CallToActionV1 from '../../components/callToAction/CallToActionV1';
import AboutV5 from '../../components/about/AboutV5';
import ServiceV6 from '../../components/service/ServiceV6';
import StatisticsV1 from '../../components/statistics/StatisticsV1';
import AboutV6 from '../../components/about/AboutV6';
import GalleryV5 from '../../components/gallery/GalleryV5';
import ContactV3 from '../../components/contact/ContactV3';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import PricingPlanV4 from '../../components/pricing/PricingPlanV4';
import BlogV1 from '../../components/blog/BlogV1';
import BrandV2 from '../../components/brand/BrandV2';
import FooterV5 from '../../components/footer/FooterV5';

const HomeFive = () => {
    return (
        <>
            <HeaderMenu5 />
            <BannerV5 />
            <CallToActionV1 />
            <AboutV5 />
            <ServiceV6 />
            <StatisticsV1 counterStyle="style-three" />
            <AboutV6 />
            <GalleryV5 />
            <ContactV3 />
            <TestimonialV2 />
            <PricingPlanV4 />
            <BlogV1 blogSpace="pt-115 rpt-95 pb-75 rpb-55" />
            <BrandV2 />
            <FooterV5 />
        </>
    );
};

export default HomeFive;