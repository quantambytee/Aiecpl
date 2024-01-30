import React from 'react';
import HeaderMenu7 from '../../components/header/HeaderMenu7';
import BannerV7 from '../../components/banner/BannerV7';
import AboutV8 from '../../components/about/AboutV8';
import ServiceV8 from '../../components/service/ServiceV8';
import SolutionV1 from '../../components/others/SolutionV1';
import FaqV1 from '../../components/faq/FaqV1';
import PricingPlanV7 from '../../components/pricing/PricingPlanV7';
import TestimonialV4 from '../../components/testimonial/TestimonialV4';
import BlogV4 from '../../components/blog/BlogV4';
import CallToActionV3 from '../../components/callToAction/CallToActionV3';
import FooterV7 from '../../components/footer/FooterV7';

const HomeSeven = () => {
    return (
        <>
            <div className="home-seven">
                <HeaderMenu7 />
                <BannerV7 />
                <AboutV8 />
                <ServiceV8 />
                <SolutionV1 />
                <FaqV1 />
                <PricingPlanV7 />
                <TestimonialV4 testClass="pt-150" />
                <BlogV4 />
                <CallToActionV3 />
                <FooterV7 />
            </div>
        </>
    );
};

export default HomeSeven;