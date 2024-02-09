import React from 'react';
import ServiceV9Data from '../../jsonData/ServiceV9Data.json'
import SingleServiceV9 from './SingleServiceV9';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination,Autoplay } from 'swiper/modules';

const ServiceV9 = () => {
    return (
        <>
            <section className="services-eight home-eight rel z-1 pt-115 rpt-95 pb-120 rpb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center mb-65">
                                <span className="sub-title">Our Services</span>
                                <h2>We Provide All Kind Advanced Security Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="service-slider-wrap">
                        <Swiper
                            modules={[Keyboard, Pagination,Autoplay]}
                            pagination={{ clickable: true }}
                            spaceBetween={10}

                            loop={true}
                            keyboard={{
                                enabled: true,
                            }}
                            autoplay={{
                                delay: 2500, // Adjust the delay as needed
                                disableOnInteraction: false, // Continue autoplay after interaction
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                767: {
                                    slidesPerView: 2,
                                },
                                991: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {ServiceV9Data.map(service =>
                                <SwiperSlide key={service.id}>
                                    <SingleServiceV9 service={service} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceV9;