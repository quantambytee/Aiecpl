import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import globalEdu from "../../assets/images/product/globalEdu.png";
import loan from "../../assets/images/product/loan.png";
import visa from "../../assets/images/product/visa.png";
import counselor from "../../assets/images/product/counselor.png";

const imageSrc = {
  "globalEdu.png": globalEdu,
  "loan.png": loan,
  "visa.png": visa,
  "counselor.png": counselor,
};
const SinglePrivacyV1 = ({ privacy }) => {
  const { icon, title, text } = privacy;
  // console.log("key", privacy);
  let imgSrc = imageSrc[icon];
  return (
    <>
      <div className="protect-item">
        <div className="icon">
          <img src={imgSrc} alt="Icon" />
        </div>
        <div className="content">
          <h4>
            <Link to={{ pathname: "/Universities&cources#", state: { title } }}>
              {title}
            </Link>
          </h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePrivacyV1;
