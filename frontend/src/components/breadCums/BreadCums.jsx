import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import studyInAustralia from "../../assets/images/services/ausrtalia.jpeg";
import italy from "../../assets/images/services/Italy.png";
import germany from "../../assets/images/services/germany.jpeg";
import japan from "../../assets/images/services/japan.jpeg";
import newzealand1 from "../../assets/images/services/newzealand1.jpeg";
import Bulgariabanner from "../../assets/images/services/Bulgariabanner.png";
import bangladesh from "../../assets/images/services/bangladesh.jpeg";
import nepal from "../../assets/images/services/nepal.jpeg";
import kazasthan from "../../assets/images/services/kazasthan.jpeg";
import poland from "../../assets/images/services/poland.jpeg";
import belgium from "../../assets/images/services/belgium.png";
import Bbanner from "../../assets/images/Bbanner.jpg";

const countryBanner = {
  "Italy Details": italy,
  "Austrailia Details": studyInAustralia,
  "Germany Details": germany,
  "Japan Details": japan,
  "NewZealand Details": newzealand1,
  "Bulgaria Details": Bulgariabanner,
  "Bangaladesh Details": bangladesh,
  "Nepal Details": nepal,
  "Kazakhstan Details": kazasthan,
  "Poland Details": poland,
  "Belgium Details": belgium,
  "Abroad & Universities": Bbanner,
};
const BreadCums = ({ pageTitle, pageLink }) => {
  return (
    <>
      <section
        className="page-banner bgs-cover overlay pt-50"
        style={{
          backgroundImage: `url(${countryBanner[pageTitle]})`,
        }}
      >
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
