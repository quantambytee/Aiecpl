import React from 'react';
import GalleryV2Data from '../../jsonData/GalleryV2Data.json'
import SingleGalleryV2 from './SingleGalleryV2';

const GalleryV2 = ({ partial = true }) => {
    return (
        <>
            <section className="gallery-section-two overlay pt-115 rpt-95 pb-85 rpb-65 px-60 rpx-0">
                <div className="container-fluid">
                    <div className="section-title text-center mb-55">
                        <span className="sub-title">Our Gallery</span>
                        <h2>Offer The Latest Software And <br />Solutions To Our customers!</h2>
                    </div>
                    <div className="row text-white">
                        {partial &&
                            <>
                                {GalleryV2Data.slice(0, 3).map(gallery =>
                                    <div className="col-xl-4 col-md-6" key={gallery.id}>
                                        <SingleGalleryV2 gallery={gallery} />
                                    </div>
                                )}
                            </> ||
                            <>
                                {GalleryV2Data.map(gallery =>
                                    <div className="col-xl-4 col-md-6" key={gallery.id}>
                                        <SingleGalleryV2 gallery={gallery} />
                                    </div>
                                )}
                            </>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryV2;