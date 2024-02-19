import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import HeaderMenuV1 from '../../components/header/HeaderMenuV1';
import BreadCums from '../../components/breadCums/BreadCums';
import BlogPageContent from './BlogPageContent';
import FooterV8 from '../../components/footer/FooterV8';

const Blog = () => {
    return (
        <>
            {/* <InnerHeader /> */}
           <HeaderMenuV1/>
            <BreadCums pageTitle="Blog Page" pageLink="blog" />
            <BlogPageContent />
            <FooterV8 />
        </>
    );
};

export default Blog;