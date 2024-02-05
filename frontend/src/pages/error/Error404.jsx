import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
// import BreadCums from '../../components/breadCums/BreadCums';
import ErrorContent from './ErrorContent';
// import FooterV2 from '../../components/footer/FooterV2';

const Error404 = () => {
    return (
        <>
            <InnerHeader />
            {/* <BreadCums pageTitle="Page Not Found" pageLink="404" /> */}
            <ErrorContent />
            {/* <FooterV2 /> */}
        </>
    );
};

export default Error404;

//  import { useContext } from "react";
// import "./styles.css";
// import ThemeContext from "./ThemeChange";
// import { ThemeChange } from "./ThemeChange";




