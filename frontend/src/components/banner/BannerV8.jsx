import React from 'react';
import BannerV8Data from '../../jsonData/BannerV8Data.json'
import SingleBannerV8 from './SingleBannerV8';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import BannerCustomNavigation from './BannerCustomNavigation';

const BannerV8 = () => {
    return (
        <>
            <section className="main-slider bg-black text-white">
                <div className="main-slider-wrap">
                    <Swiper
                        modules={[Keyboard, Autoplay]}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3500,
                            stopOnLastSlide: false,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        keyboard={{
                            enabled: true,
                        }}
                    >
                        {console.log("BannerV8Data",BannerV8Data)}
                        {BannerV8Data.map(banner =>
                        
                            <SwiperSlide key={banner.id}>
                                <SingleBannerV8 banner={banner} />
                            </SwiperSlide>
                        )}
                        <BannerCustomNavigation />
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default BannerV8;