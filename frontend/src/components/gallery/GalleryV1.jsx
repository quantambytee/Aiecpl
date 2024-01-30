import React from 'react';
import GalleryV1Data from '../../jsonData/GalleryV1Data.json'
import SingleGalleryV1 from './SingleGalleryV1';

const GalleryV1 = ({ partial = true }) => {
    return (
        <>
            <section className="gallery-section overlay text-white pt-115 rpt-95 pb-100 rpb-80">
                <div className="container-fluid px-0">
                    <div className="section-title text-center mb-55">
                        <span className="sub-title">Our Gallery</span>
                        <h2>Some Of Our Work</h2>
                    </div>
                    <div className="row">
                        {partial &&
                            <>
                                {GalleryV1Data.slice(0, 4).map(gallery =>
                                    <div className="col-lg-3 col-sm-6" key={gallery.id}>
                                        <SingleGalleryV1 gallery={gallery} />
                                    </div>
                                )}
                            </> ||
                            <>
                                {GalleryV1Data.map(gallery =>
                                    <div className="col-lg-3 col-sm-6" key={gallery.id}>
                                        <SingleGalleryV1 gallery={gallery} />
                                    </div>
                                )}
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryV1;