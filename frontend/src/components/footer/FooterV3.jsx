import React from 'react';
import FooterWidgetV1 from './FooterWidgetV1';
import FooterCopyRightV1 from './FooterCopyRightV1';

const FooterV3 = () => {
    return (
        <>
            <footer className="main-footer footer-two bgs-cover text-white pt-150 rpt-115" style={{ backgroundImage: "url(/images/footer/footer-bg-map.png)" }}>
                <div className="container">
                    <FooterWidgetV1 />
                </div>
                <FooterCopyRightV1 />
            </footer>
        </>
    );
};

export default FooterV3;