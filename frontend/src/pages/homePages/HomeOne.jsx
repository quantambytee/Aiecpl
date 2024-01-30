import React from 'react';
import HeaderMenuV1 from '../../components/header/HeaderMenuV1';
import BannerV1 from '../../components/banner/BannerV1';
import ServiceV1 from '../../components/service/ServiceV1';
import AboutV1 from '../../components/about/AboutV1';
import FeatureV1 from '../../components/feature/FeatureV1';
import WorkProgressV1 from '../../components/work/WorkProgressV1';
import PricingPlanV1 from '../../components/pricing/PricingPlanV1';
import GalleryV1 from '../../components/gallery/GalleryV1';
import BlogV1 from '../../components/blog/BlogV1';
import FooterV1 from '../../components/footer/FooterV1';

const HomeOne = () => {
    return (
        <>
            <HeaderMenuV1 />
            <BannerV1 />
            <ServiceV1 />
            <AboutV1 aboutClass="has-bg bg-light-black" textColor="text-white" />
            <FeatureV1 featureSpace="pt-240" />
            <WorkProgressV1 />
            <PricingPlanV1 />
            <GalleryV1 />
            <BlogV1 blogSpace="pb-90 rpb-70" />
            <FooterV1 />
        </>
    );
};

export default HomeOne;