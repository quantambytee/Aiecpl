import React from 'react';
import BlogV1Data from '../../jsonData/BlogV1Data.json'
import SingleBlogV1 from './SingleBlogV1';

const BlogV1 = (props) => {
    const { blogSpace } = props

    return (
        <>
            <section className={`${blogSpace} news-section`}>
                <div className="container">
                    <div className="section-title text-center mb-55">
                        <span className="sub-title">Recent Articles</span>
                        <h2>Latest News from Us</h2>
                    </div>
                    <div className="row justify-content-lg-center">
                        {BlogV1Data.map(blog =>
                            <div className="col-lg-4 col-sm-6" key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogV1;