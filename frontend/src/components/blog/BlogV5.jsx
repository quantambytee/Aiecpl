import React from 'react';
import BlogV5Data from '../../jsonData/BlogV5Data.json'
import SingleBlogV5 from './SingleBlogV5';

const BlogV5 = () => {
    return (
        <>
            <section className="news-section-five pt-115 rpt-95 pb-90 rpb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="section-title text-center mb-65">
                                <span className="sub-title">Blog & News</span>
                                <h2>Every single day update Security</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {BlogV5Data.map(blog =>
                            <div className="col-lg-4 col-md-6" key={blog.id}>
                                <SingleBlogV5 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogV5;