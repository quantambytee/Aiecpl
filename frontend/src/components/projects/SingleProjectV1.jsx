import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import counselling from "../../assets/images/ourPoject/counselling.jpg"
import accomodation from "../../assets/images/ourPoject/accomodation.jpg"
import globalStudies from "../../assets/images/ourPoject/globalStudies.jpg"
import visaAssistance from "../../assets/images/ourPoject/visaAssistance.jpg"
const imgMap={
    "visaAssistance.jpg":visaAssistance,
    "globalStudies.jpg":globalStudies,
    "accomodation.jpg":accomodation,
    "counselling.jpg":counselling,
}
const SingleProjectV1 = ({ project }) => {
    const { thumb, title, category, delay } = project
    let imageSrc=imgMap[thumb]
    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="project-item">
                    <img src={imageSrc} alt="project" />
                    <div className="project-content">
                        <h3><Link to="/portfolio-details#">{title}</Link></h3>
                        <span className="category"><Link to="/portfolio-details#">{category}</Link></span>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleProjectV1;