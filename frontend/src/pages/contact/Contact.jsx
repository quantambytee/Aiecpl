import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ContactContent from './ContactContent';
import ContactMap from './ContactMap';
import FooterV2 from '../../components/footer/FooterV2';

const Contact = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Contact Us" pageLink="Contact" />
            <ContactContent />
            <ContactMap />
            <FooterV2 />
        </>
    );
};

export default Contact;