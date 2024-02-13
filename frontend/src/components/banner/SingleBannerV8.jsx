import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
// import img from "../../assets/images/heroImage.jpg"
import heroImage from "../../assets/images/heroImage.jpg";
import heroImage2 from "../../assets/images/hero_image2.jpg";
import heroImage3 from "../../assets/images/hero_Image3.jpg";

// Map thumb values to imported images
const imageMap = {
    "heroImage.jpg": heroImage,
    "hero_image2.jpg": heroImage2,
    "hero_image3.jpg": heroImage3,
};

const SingleBannerV8 = ({ banner }) => {
    const { thumb, subtitle, title, text, btn1Text, btnIcon, btn2Text } = banner
    console.log("thumb",thumb);
     // Get the correct image based on the thumb value
     const imageSrc = imageMap[thumb];
    return (
        <>
            <div className="main-slider-item">
                <div className="image">
                    {/* <img src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/${thumb}`} alt="Slider" /> */}
                    <img src={imageSrc} alt="Slider" />

                </div>
                <div className="slider-caption">
                    <div className="container">
                        <div className="main-slider-content">
                            <Fade bottom delay={200}>
                                <span className="sub-title">{subtitle}</span>
                            </Fade>
                            <Fade bottom delay={400}>
                                <h1>{title}</h1>
                            </Fade>
                            <Fade bottom delay={600}>
                                <p className="text-white">{text}</p>
                            </Fade>
                            <Fade bottom delay={800}>
                                <div className="slider-btns">
                                    <Link to="#aboutUs" className="theme-btn style-ten">{btn1Text}<i className={btnIcon}></i></Link>
                                    <Link to="#contact-us" className="theme-btn style-eleven">{btn2Text} <i className={btnIcon}></i></Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV8;