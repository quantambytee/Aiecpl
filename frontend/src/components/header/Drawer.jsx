import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import logo from "/images/logos/logo-two.png";
import logo1 from "../../assets/logo/bigLogo.png"
function Drawer({ drawer, action }) {

    const [itemSize, setSize] = useState("0px");
    const [item, setItem] = useState("");

    const handler = (e, value) => {
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
                                    <img src={logo1} alt="logo" />
                                </Link>
                                <div id="menu" className="text-left">
                                    <ul className="offcanvas_main_menu">
                                        <li className="menu-item-has-children active" id="home" onClick={(e) => handler(e, "home")}>
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="">Home</Link>
                                            <ul className="sub-menu" style={{ height: item === "home" ? itemSize : "0px" }}>
                                                <li>
                                                    <Link to="/#">Home 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-2#">Home 2</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-3#">Home 3</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-4#">Home 4</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-5#">Home 5</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-6#">Home 6</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-7#">Home 7</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-8#">Home 8</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-9#">Home 9</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-10#">Home 10</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children active" id="about" onClick={(e) => handler(e, "about")}>
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="">About</Link>
                                            <ul className="sub-menu" style={{ height: item === "about" ? itemSize : "0px" }}>
                                                <li>
                                                    <Link to="/about#">About 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about-2#">About 2</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about-3#">About 3</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about-4#">About four</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about-5#">About five</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about-6#">About Six</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about-7#">About Seven</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children active" id="service" onClick={(e) => handler(e, "service")}>
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="">Service</Link>
                                            <ul className="sub-menu" style={{ height: item === "service" ? itemSize : "0px" }}>
                                                <li>
                                                    <Link to="/services#">Service One</Link>
                                                </li>
                                                <li>
                                                    <Link to="/service-2#">Service Two</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services-3#">Service Three</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services-4#">Service Four</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services-5#">Service five</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services-6#">Service Six</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services-7#">Service Seven</Link>
                                                </li>
                                                <li>
                                                    <Link to="/service-details#">Service Details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children active" id="Pages" onClick={(e) => handler(e, "Pages")}>
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="">Pages</Link>
                                            <ul className="sub-menu" style={{ height: item === "Pages" ? itemSize : "0px" }}>
                                                <li>
                                                    <Link to="/counter#">Counters</Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop#">Shop</Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop-details#">Shop details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/pricing">Pricing One</Link>
                                                </li>
                                                <li>
                                                    <Link to="/pricing-2#">Pricing Two</Link>
                                                </li>
                                                <li>
                                                    <Link to="/pricing-3#">Pricing Three</Link>
                                                </li>
                                                <li>
                                                    <Link to="/pricing-4#">Pricing Four</Link>
                                                </li>
                                                <li>
                                                    <Link to="/pricing-5#">Pricing Five</Link>
                                                </li>
                                                <li>
                                                    <Link to="/pricing-6#">Pricing Six</Link>
                                                </li>
                                                <li>
                                                    <Link to="/portfolio#">Portfolio One</Link>
                                                </li>
                                                <li>
                                                    <Link to="/portfolio-2#">Portfolio Two</Link>
                                                </li>
                                                <li>
                                                    <Link to="/portfolio-3#">Portfolio three</Link>
                                                </li>
                                                <li>
                                                    <Link to="/portfolio-4#">Portfolio Four</Link>
                                                </li>
                                                <li>
                                                    <Link to="/portfolio-details#">Portfolio Details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/team#">Team One</Link>
                                                </li>
                                                <li>
                                                    <Link to="/team-2#">Team Two</Link>
                                                </li>
                                                <li>
                                                    <Link to="/team-3#">Team Three</Link>
                                                </li>
                                                <li>
                                                    <Link to="/team-4#">Team Four</Link>
                                                </li>
                                                <li>
                                                    <Link to="/team-profile#">Team Profile</Link>
                                                </li>
                                                <li>
                                                    <Link to="/testimonial#">Testimonials One</Link>
                                                </li>
                                                <li>
                                                    <Link to="/testimonial-2#">Testimonials Two</Link>
                                                </li>
                                                <li>
                                                    <Link to="/testimonial-3#">Testimonials Three</Link>
                                                </li>
                                                <li>
                                                    <Link to="/testimonial-4#">Testimonials Four</Link>
                                                </li>
                                                <li>
                                                    <Link to="/404">404</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children active" id="Blogs" onClick={(e) => handler(e, "Blogs")}>
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <Link to="">Blog</Link>
                                            <ul className="sub-menu" style={{ height: item === "Blogs" ? itemSize : "0px" }}>
                                                <li>
                                                    <Link to="/blog#">Blog Page</Link>
                                                </li>
                                                <li>
                                                    <Link to="/blog-details#">Blog Details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children active" onClick={(e) => handler(e, "contact")} id="contact">
                                            <Link to="/contact#">Contact</Link>
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
