import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeEight from './pages/homePages/HomeEight';
import About from './pages/aboutPages/About';
import About2 from './pages/aboutPages/About2';
import About3 from './pages/aboutPages/About3';
import About4 from './pages/aboutPages/About4';
import About5 from './pages/aboutPages/About5';
import About6 from './pages/aboutPages/About6';
import About7 from './pages/aboutPages/About7';
import Services from './pages/servicesPages/Services';
import Services2 from './pages/servicesPages/Services2';
import Services3 from './pages/servicesPages/Services3';
import Services4 from './pages/servicesPages/Services4';
import Services5 from './pages/servicesPages/Services5';
import Services6 from './pages/servicesPages/Services6';
import Services7 from './pages/servicesPages/Services7';
import ServicesDetails from './pages/servicesPages/ServicesDetails';
import CounterPage from './pages/counterPage/CounterPage';
import Shop from './pages/shopPage/Shop';
import ShopDetails from './pages/shopPage/ShopDetails';
import Portfolio from './pages/portfolio/Portfolio';
import Portfolio2 from './pages/portfolio/Portfolio2';
import Portfolio3 from './pages/portfolio/Portfolio3';
import Portfolio4 from './pages/portfolio/Portfolio4';
import PortfolioDetails from './pages/portfolio/PortfolioDetails';
import Team1 from './pages/team/Team1';
import Team2 from './pages/team/Team2';
import Team3 from './pages/team/Team3';
import Team4 from './pages/team/Team4';
import TeamProfile from './pages/team/TeamProfile';
import Pricing from './pages/pricing/Pricing';
import Pricing2 from './pages/pricing/Pricing2';
import Pricing3 from './pages/pricing/Pricing3';
import Pricing4 from './pages/pricing/Pricing4';
import Pricing5 from './pages/pricing/Pricing5';
import Pricing6 from './pages/pricing/Pricing6';
import Testimonial from './pages/testimonial/Testimonial';
import Testimonial2 from './pages/testimonial/Testimonial2';
import Testimonial3 from './pages/testimonial/Testimonial3';
import Testimonial4 from './pages/testimonial/Testimonial4';
import Blog from './pages/blog/Blog';
import BlogDetails from './pages/blogDetails/BlogDetails';
import Contact from './pages/contact/Contact';
import Error404 from './pages/error/Error404';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeEight />}></Route>
                
                
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='*' element={<Error404 />}></Route>
            </Routes>
        </>
    );
};

export default Routers;