import React from 'react';
import GalleryV5Data from '../../jsonData/GalleryV5Data.json'
import SingleGalleryV5 from './SingleGalleryV5';

const GalleryV5 = () => {
    return (
        <>
            <section className="gallery-section-five overlay pt-115 rpt-95 pb-90 rpb-70 px-60 rpx-0">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="sub-title">Our Case Studies</span>
                        <h2>Lets know Something About <br /> Our Recent Work</h2>
                    </div>
                    <div className="row text-white">
                        {GalleryV5Data.map(gallery =>
                            <div className="col-xl-3 col-sm-6" key={gallery.id}>
                                <SingleGalleryV5 gallery={gallery} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryV5;