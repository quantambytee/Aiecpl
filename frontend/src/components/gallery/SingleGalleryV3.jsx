import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleGalleryV3 = ({ gallery }) => {
    const { thumb2, title } = gallery

    return (
        <>
            <div className="gallery-item style-three">
                <img src={`/images/gallery/${thumb2}`} alt="Gallery" />
                <div className="gallery-content">
                    <h5><Link to="/portfolio-details#">{title}</Link></h5>
                </div>
            </div>
        </>
    );
};

export default SingleGalleryV3;