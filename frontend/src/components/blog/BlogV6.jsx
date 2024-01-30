import React from 'react';
import BlogV6Data from '../../jsonData/BlogV6Data.json'
import SingleBlogV6 from './SingleBlogV6';

const BlogV6 = () => {
    return (
        <>
            <section className="news-six-area rel z-1 pt-110 pb-90 rpt-90 rpb-70" id="news">
                <div className="container">
                    <div className="section-title text-center mb-65">
                        <span className="sub-title">Our Update</span>
                        <h2>Our Latest Blog & News</h2>
                    </div>
                    <div className="row">
                        {BlogV6Data.map(blog =>
                            <div className="col-lg-4 col-sm-6" key={blog.id}>
                                <SingleBlogV6 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogV6;