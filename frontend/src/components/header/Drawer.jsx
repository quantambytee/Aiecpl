import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
// import Logo from "../../assets/logo/Logo_svg.svg"
import LOGOBig from "../../assets/logo/LogoBig.jpeg"

function Drawer({ drawer, action }) {

    const [itemSize, setSize] = useState("0px");
    const [item, setItem] = useState("");

    const handler = (e, value) => {
        action(e)
        const getItems = document.querySelectorAll(`#${value} li`).length;

        if (getItems > 0) {
            if (item !== value) {
                setSize(`${50 * getItems}px`);
                setItem(value);
            } else {
                setItem("");
            }
        }
    }

    return (
        <>
            <div className={`off_canvars_overlay ${drawer ? "active" : ""}`} onClick={(e) => action(e)}></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`} >
                                <Link to="/#" className="offcanvas-brand text-center mb-40 d-block" >
                                    <img src={LOGOBig} alt="logo" />
                                </Link>
                                <div id="menu" className="text-left">
                                    <ul className="offcanvas_main_menu">
                                        <li className="menu-item-has-children active" id="home" onClick={(e) => handler(e, "home")}>
                                            {/* <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span> */}
                                            <Link to="/#" >Home</Link>
                                            {/* <ul className="sub-menu" style={{ height: item === "home" ? itemSize : "0px" }}>
                                                <li>
                                                    <Link to="/#">Home 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-2#">Home 2</Link>
                                                </li>
                                              
                                            </ul> */}
                                        </li>
                                        <li className="menu-item-has-children active" id="about" onClick={(e) => handler(e, "about")}>
                                            {/* <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span> */}
                                            <Link to="#aboutUs" >About</Link>
                                            {/* <ul className="sub-menu" style={{ height: item === "about" ? itemSize : "0px" }}>
                                                <li>
                                                    <Link to="/about#">About 1</Link>
                                                </li>
                                               
                                            </ul> */}
                                        </li>
                                        <li className="menu-item-has-children active" id="service" onClick={(e) => handler(e, "service")}>
                                            {/* <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span> */}
                                            <Link to="#service" >Service</Link>
                                            {/* <ul className="sub-menu" style={{ height: item === "service" ? itemSize : "0px" }}>
                                                <li>
                                                    <Link to="/services#">Service One</Link>
                                                </li>
                                            
                                            </ul> */}
                                        </li>
                                        
                                        <li className="menu-item-has-children active" id="Blogs" onClick={(e) => handler(e, "Blogs")}>
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="">Explore Your Study Destinations</Link>
                                            <ul className="sub-menu" style={{ height: item === "Blogs" ? itemSize : "0px" }}>
                                            <li><Link to="/service-details#">Study In Australia</Link></li>
                            <li><Link to="/italy-details#" >Study In Italy</Link></li>
                            <li><Link to="/italy-details#">Study In Germany</Link></li>
                            <li><Link to="/italy-details#">Study In Japan</Link></li>
                            <li><Link to="/italy-details#">Study In New Zealand</Link></li>
                            <li><Link to="/italy-details#">Study In Bulgaria</Link></li>
                            <li><Link to="/italy-details#">Study In Bangaladesh</Link></li>
                            <li><Link to="/italy-details#">Study In Nepal</Link></li>
                            <li><Link to="/italy-details#">Study In Kazakhstan</Link></li>
                            <li><Link to="/italy-details#">Study In Belgium</Link></li>
                            <li><Link to="/italy-details#">Study In Poland</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children active" onClick={(e) => handler(e, "contact")} id="contact">
                                            <Link to="#contact-us">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Drawer;
