import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogV1 = ({ blog }) => {
    const { thumb, icon, date, icon2, tag, title, text, authorThumb, author, delay } = blog;

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="news-item">
                    <div className="image">
                        <img src={`/images/news/${thumb}`} alt="News" />
                    </div>
                    <div className="news-content">
                        <ul className="post-meta-item">
                            <li>
                                <i className={icon}></i>
                                <Link to="#" >{date}</Link>
                            </li>
                            <li>
                                <i className={icon2}></i>
                                <Link to="#">{tag}</Link>
                            </li>
                        </ul>
                        <h4><Link to="/blog-details#">{title}</Link></h4>
                        <p>{text}</p>
                    </div>
                    <div className="news-author">
                        <img src={`/images/news/${authorThumb}`} alt="Author" />
                        <span className="posted-by">By
                            <Link to="#" className='ms-1'>{author}</Link>
                        </span>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleBlogV1;