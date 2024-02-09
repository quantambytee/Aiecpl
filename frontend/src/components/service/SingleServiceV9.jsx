import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import counselli from "../../assets/services/counselli.png"
import icon2 from "../../assets/services/icon2.png"
import studentEdu from "../../assets/services/studentEdu.png"
import languageC from "../../assets/services/languageC.png"
import courseSelection from "../../assets/services/courseSelection.png"
import accomodation from "../../assets/services/accomodation.png"
const imageMap = {
    "counselli.png": counselli,
    "icon2.png": icon2,
    "studentEdu.png": studentEdu,
    "languageC.png":languageC,
    "courseSelection.png":courseSelection,
    "accomodation.png":accomodation

};
const SingleServiceV9 = ({ service }) => {
    const { icon, title, text, icon2 } = service
    const imageSrc = imageMap[icon];
    return (
        <>
            <Fade className="fadeInUp">
                <div className="service-item-eight service-div">
                    <div className="icon">
                        <img src={imageSrc} alt="Icon" />
                    </div>
                    <h3><Link to="/#">{title}</Link></h3>
                    <p className='srvicePara'>{text}</p>
                    {/* <Link to="/service-details#" className="learn-more">Read More<i className={icon2}></i></Link> */}
                </div>
            </Fade>
        </>
    );
};

export default SingleServiceV9;