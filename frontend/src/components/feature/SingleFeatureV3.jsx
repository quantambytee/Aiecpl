import React from "react";
import { Fade } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";
import iconWork from "../../assets/images/features/Icon_Work.svg";
import iconStudy from "../../assets/images/features/Icon_Study.svg";
import iconpartner from "../../assets/images/features/Icon_Partner.svg";

const imageSource = {
  "Icon_Work.svg": iconWork,
  "Icon_Study.svg": iconStudy,
  "Icon_Partner.svg": iconpartner,
};
const SingleFeatureV3 = ({ feature }) => {
  const { thumb, title, text, delay } = feature;
  let imgSrc = imageSource[thumb];
  return (
    <>
      <Fade className="fadeInUp" delay={delay}>
        <div className="feature-item-three">
          <div className="icon">
            <img src={imgSrc} alt="Icon" />
          </div>
          <div className="feature-content">
            <h3>
              <Link to="#/">{title}</Link>
            </h3>
            <p>{text}</p>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default SingleFeatureV3;
