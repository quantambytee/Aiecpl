import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import studyInAustralia from "../../assets/images/services/studyInAustralia.jpeg"
const BreadCums = ({ pageTitle, pageLink }) => {
    return (
        <>
            <section className="page-banner bgs-cover overlay pt-50" style={{ backgroundImage: `url(${studyInAustralia})` }}>
                <div className="container">
                    {/* <div className="banner-inner">
                        <h1 className="page-title">{pageTitle ? pageTitle : "404 Not Found"}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/#">Home</Link></li>
                                <li className="breadcrumb-item active">{pageLink ? pageLink : "404 Not Found"}</li>
                            </ol>
                        </nav>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default BreadCums;