import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogV4 = ({ blog }) => {
    const { thumb, date, title, icon, icon2 } = blog;

    return (
        <>
            <div className="blog-style-four">
                <div className="image">
                    <img src={`/images/news/${thumb}`} alt="Blog" />
                </div>
                <div className="blog-four-content">
                    <span className="date"><i className={icon2}></i>{date}</span>
                    <h3><Link to="/blog-details#">{title}</Link></h3>
                    <Link to="/blog-details#" className="read-more">Click Here <i className={icon}></i></Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV4;