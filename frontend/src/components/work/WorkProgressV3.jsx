import React from 'react';
import BrandV1Data from '../../jsonData/BrandV1Data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import SingleBrandV1 from '../brand/SingleBrandV1';
import WorkProgressV3Inner from './WorkProgressV3Inner';

const WorkProgressV3 = () => {
    return (
        <>
            <section className="work-progress-three bg-blue text-white pb-85 rpb-65" style={{ backgroundImage: "url(/images/background/progress.png)" }}>
                <div className="container">
                    <div className="logo-carousel-wrap style-two bg-white py-100 px-25 br-5">
                        <Swiper
                            modules={[Keyboard, Autoplay]}
                            spaceBetween={10}
                            autoplay={{
                                delay: 3000,
                                stopOnLastSlide: false,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            keyboard={{
                                enabled: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                767: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                }
                            }}
                        >
                            {BrandV1Data.map(brand =>
                                <SwiperSlide key={brand.id}>
                                    <SingleBrandV1 brand={brand} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <WorkProgressV3Inner />
                </div>
            </section>
        </>
    );
};

export default WorkProgressV3;