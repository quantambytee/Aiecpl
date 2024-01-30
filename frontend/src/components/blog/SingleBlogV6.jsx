import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogV6 = ({ blog }) => {
    const { thumb, title, icon1, icon2, date, comment, delay } = blog

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="news-six-item">
                    <div className="image">
                        <img src={`/images/news/${thumb}`} alt="News" />
                    </div>
                    <h4><Link to="/blog-details#">{title}</Link></h4>
                    <ul className="post-meta-item">
                        <li>
                            <i className={icon1}></i>
                            <Link to="#">{date}</Link>
                        </li>
                        <li>
                            <i className={icon2}></i>
                            <Link to="#">{comment}</Link>
                        </li>
                    </ul>
                </div>
            </Fade>
        </>
    );
};

export default SingleBlogV6;