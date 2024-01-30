import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogV2 = ({ blog }) => {
    const { thumb, authorThumb, author, icon, date, title, text, delay } = blog

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="news-item style-two ">
                    <div className="image">
                        <img src={`/images/news/${thumb}`} alt="News" />
                    </div>
                    <div className="news-content">
                        <div className="news-author">
                            <img src={`/images/news/${authorThumb}`} alt="Author" />
                        </div>
                        <ul className="post-meta-item">
                            <li>
                                <b>By <Link to="#">{author}</Link></b>
                            </li>
                            <li>
                                <i className={icon}></i>
                                <Link to="#" rel="bookmark">{date}</Link>
                            </li>
                        </ul>
                        <h4><Link to="/blog-details#">{title}</Link></h4>
                        <p>{text} </p>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleBlogV2;