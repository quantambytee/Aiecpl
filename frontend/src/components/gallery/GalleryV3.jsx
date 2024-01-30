import React from 'react';
import GalleryV2Data from '../../jsonData/GalleryV2Data.json'
import SingleGalleryV3 from './SingleGalleryV3';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import GalleryCustomNavigation from './GalleryCustomNavigation';

const GalleryV3 = () => {
    return (
        <>
            <section className="gallery-section-three overlay pt-120 rpt-95 pb-105 rpb-85">
                <div className="container">

                    <div className="section-title gellery-section-title mb-55">
                        <span className="sub-title">Our Gallery</span>
                        <h2>Explore our recent projects</h2>
                        <div className="gallery-carousel-arrow mt-25">

                        </div>
                    </div>

                    <div className="gallery-three-wrap">

                        <Swiper
                            modules={[Keyboard, Autoplay]}
                            spaceBetween={10}
                            /*  autoplay={{
                                 delay: 2500,
                                 stopOnLastSlide: false,
                                 disableOnInteraction: false,
                             }} */
                            loop={true}
                            keyboard={{
                                enabled: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },
                                576: {
                                    slidesPerView: 2
                                },
                                767: {
                                    slidesPerView: 2
                                },
                                1200: {
                                    slidesPerView: 3
                                }
                            }}
                        >

                            {GalleryV2Data.slice(0, 6).map(gallery =>
                                <SwiperSlide key={gallery.id}>
                                    <SingleGalleryV3 gallery={gallery} />
                                </SwiperSlide>
                            )}
                            <GalleryCustomNavigation />
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryV3;