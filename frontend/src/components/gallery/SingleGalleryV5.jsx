import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleGalleryV5 = ({ gallery }) => {
    const { thumb, title, text, delay } = gallery

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="gallery-item-five ">
                    <img src={`/images/gallery/${thumb}`} alt="Gallery" />
                    <div className="gallery-content">
                        <div className="gallery-content-inner">
                            <Link to="/portfolio-details#" className="gallery-btn"><i className="fas fa-chevron-right"></i></Link>
                            <h3><Link to="/portfolio-details#">{title}</Link></h3>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleGalleryV5;