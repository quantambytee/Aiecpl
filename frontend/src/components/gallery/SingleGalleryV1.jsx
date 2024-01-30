import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleGalleryV1 = ({ gallery }) => {
    const { thumb, title, description, delay } = gallery;

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="gallery-item">
                    <img src={`/images/gallery/${thumb}`} alt="Gallery" />
                    <div className="gallery-content">
                        <span className="category">
                            <Link to="/portfolio-details#">{title}</Link>
                        </span>
                        <h5>
                            <Link to="/portfolio-details#">{description}</Link>
                        </h5>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleGalleryV1;