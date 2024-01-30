import React from 'react';
import FooterNewsLetter from './FooterNewsLetter';
import FooterV4Content from './FooterV4Content';
import FooterCopyRightV1 from './FooterCopyRightV1';

const FooterV5 = () => {
    return (
        <>
            <footer className="main-footer footer-four bgs-cover bg-lighter" style={{ backgroundImage: "url(/images/footer/footer-bg.png)" }}>
                <FooterNewsLetter />
                <FooterV4Content />
                <FooterCopyRightV1 copyrightBg="bg-blue text-white mt-30" />
            </footer>
        </>
    );
};

export default FooterV5;