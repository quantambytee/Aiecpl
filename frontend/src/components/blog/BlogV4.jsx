import React from 'react';
import BrandV4Data from '../../jsonData/BrandV4Data.json'
import SingleBlogV4 from './SingleBlogV4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import BlogCustomNavigation from './BlogCustomNavigation';

const BlogV4 = () => {
    return (
        <>
            <section className="blog-four home-seven py-135 rpy-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-four-left rmb-55">
                                <div className="section-title mt-15 mb-30">
                                    <span className="sub-title">08 Blog & News</span>
                                    <h2>Get Update for Data Science</h2>
                                </div>
                                <h3>68,000 client trusted Restly</h3>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="blog-carousel">
                                <Swiper
                                    modules={[Keyboard]}
                                    spaceBetween={10}
                                    slidesPerView={2}

                                    loop={true}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        }
                                    }}
                                >
                                    {BrandV4Data.map(blog =>
                                        <SwiperSlide key={blog.id}>
                                            <SingleBlogV4 blog={blog} />
                                        </SwiperSlide>
                                    )}
                                    <BlogCustomNavigation />
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogV4;