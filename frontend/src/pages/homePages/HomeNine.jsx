import React from 'react';
import HeaderMenu9 from '../../components/header/HeaderMenu9';
import BannerV9 from '../../components/banner/BannerV9';
import Action from '../../components/others/Action';
import SellerV1 from '../../components/seller/SellerV1';
import CollectionGallery from '../../components/collection/CollectionGallery';
import WorkProgressV5 from '../../components/work/WorkProgressV5';
import CollectionV2 from '../../components/collection/CollectionV2';
import CallToActionV5 from '../../components/callToAction/CallToActionV5';
import TestimonialV6 from '../../components/testimonial/TestimonialV6';
import BlogV6 from '../../components/blog/BlogV6';
import FooterV9 from '../../components/footer/FooterV9';

const HomeNine = () => {
    return (
        <>
            <div className="home-nine">
                <div className="page-wrapper">
                    <HeaderMenu9 />
                    <BannerV9 />
                    <Action />
                    <SellerV1 />
                    <CollectionGallery />
                    <WorkProgressV5 />
                    <CollectionV2 />
                    <CallToActionV5 />
                    <TestimonialV6 />
                    <BlogV6 />
                    <FooterV9 />
                </div>
            </div>
        </>
    );
};

export default HomeNine;