import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleGalleryV2 = ({ gallery }) => {
    const { delay, thumb, title } = gallery;

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="gallery-item style-two  delay-0-2s">
                    <img src={`/images/gallery/${thumb}`} alt="Gallery" />
                    <div className="gallery-content">
                        <div className="gallery-content-inner">
                            <h5><Link to="/portfolio-details#">{title}</Link></h5>
                            <Link to="/portfolio-details#" className="learn-more">Read More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleGalleryV2;