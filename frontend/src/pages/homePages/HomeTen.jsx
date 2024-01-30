import React from 'react';
import HeaderMenu10 from '../../components/header/HeaderMenu10';
import BannerV10 from '../../components/banner/BannerV10';
import AboutV10 from '../../components/about/AboutV10';
import ServiceV10 from '../../components/service/ServiceV10';
import WhyChooseUsV1 from '../../components/WhyChooseUs/WhyChooseUsV1';
import MobileUiV2 from '../../components/ui/MobileUiV1';
import FeatureV4 from '../../components/feature/FeatureV4';
import PricingPlanV8 from '../../components/pricing/PricingPlanV8';
import SubscribeV3 from '../../components/subscribe/SubscribeV3';
import TestimonialV7 from '../../components/testimonial/TestimonialV7';
import FooterV10 from '../../components/footer/FooterV10';

const HomeTen = () => {
    return (
        <>
            <div className="home-ten">
                <div className="page-wrapper">
                    <HeaderMenu10 />
                    <BannerV10 />
                    <AboutV10 />
                    <ServiceV10 />
                    <WhyChooseUsV1 />
                    <MobileUiV2 />
                    <FeatureV4 />
                    <PricingPlanV8 />
                    <SubscribeV3 />
                    <TestimonialV7 />
                    <FooterV10 />
                </div>
            </div>

        </>
    );
};

export default HomeTen;