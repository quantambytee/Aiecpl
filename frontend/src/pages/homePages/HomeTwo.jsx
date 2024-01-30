import React from 'react';
import HeaderMenu2 from '../../components/header/HeaderMenu2';
import BannerV2 from '../../components/banner/BannerV2';
import ServiceV2 from '../../components/service/ServiceV2';
import AboutV2 from '../../components/about/AboutV2';
import BrandV1 from '../../components/brand/BrandV1';
import ServiceV3 from '../../components/service/ServiceV3';
import ContactV1 from '../../components/contact/ContactV1';
import TeamV1 from '../../components/team/TeamV1';
import WorkProgressV2 from '../../components/work/WorkProgressV2';
import SubscribeV1 from '../../components/subscribe/SubscribeV1';
import GalleryV2 from '../../components/gallery/GalleryV2';
import BlogV2 from '../../components/blog/BlogV2';
import FooterV2 from '../../components/footer/FooterV2';

const HomeTwo = () => {
    return (
        <>
            <HeaderMenu2 />
            <BannerV2 />
            <ServiceV2 />
            <AboutV2 />
            <BrandV1 />
            <ServiceV3 />
            <ContactV1 />
            <TeamV1 />
            <WorkProgressV2 />
            <SubscribeV1 subscribeSpace="pt-210 rpt-150" />
            <GalleryV2 />
            <BlogV2 blogClass="has-bg pb-90 rpb-70" />
            <FooterV2 widgetSpace="pb-20" />
        </>
    );
};

export default HomeTwo;