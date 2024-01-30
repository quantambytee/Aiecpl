import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogV5 = ({ blog }) => {
    const { thumb, date, month, icon1, icon2, icon3, author, comments, text, delay } = blog

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="news-five-item">
                    <img src={`/images/news/${thumb}`} alt="Blog" />
                    <div className="content">
                        <span className="date"><span>{date}</span>{month}</span>
                        <ul className="post-meta-item">
                            <li>
                                <i className={icon1}></i>
                                <Link to="#">{author}</Link>
                            </li>
                            <li>
                                <i className={icon2}></i>
                                <Link to="#">{comments}</Link>
                            </li>
                        </ul>
                        <h3><Link to="/blog-details#">{text}</Link></h3>
                        <Link to="/blog-details#" className="learn-more">Read More <i className={icon3}></i></Link>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleBlogV5;