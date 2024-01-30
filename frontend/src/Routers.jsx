import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeOne from './pages/homePages/HomeOne';
import HomeTwo from './pages/homePages/HomeTwo';
import HomeThree from './pages/homePages/HomeThree';
import HomeFour from './pages/homePages/HomeFour';
import HomeFive from './pages/homePages/HomeFive';
import HomeSix from './pages/homePages/HomeSix';
import HomeSeven from './pages/homePages/HomeSeven';
import HomeEight from './pages/homePages/HomeEight';
import HomeNine from './pages/homePages/HomeNine';
import HomeTen from './pages/homePages/HomeTen';
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
                <Route path='/' element={<HomeOne />}></Route>
                <Route path='/home-2' element={<HomeTwo />}></Route>
                <Route path='/home-3' element={<HomeThree />}></Route>
                <Route path='/home-4' element={<HomeFour />}></Route>
                <Route path='/home-5' element={<HomeFive />}></Route>
                <Route path='/home-6' element={<HomeSix />}></Route>
                <Route path='/home-7' element={<HomeSeven />}></Route>
                <Route path='/home-8' element={<HomeEight />}></Route>
                <Route path='/home-9' element={<HomeNine />}></Route>
                <Route path='/home-10' element={<HomeTen />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/about-2' element={<About2 />}></Route>
                <Route path='/about-3' element={<About3 />}></Route>
                <Route path='/about-4' element={<About4 />}></Route>
                <Route path='/about-5' element={<About5 />}></Route>
                <Route path='/about-6' element={<About6 />}></Route>
                <Route path='/about-7' element={<About7 />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/services-2' element={<Services2 />}></Route>
                <Route path='/services-3' element={<Services3 />}></Route>
                <Route path='/services-4' element={<Services4 />}></Route>
                <Route path='/services-5' element={<Services5 />}></Route>
                <Route path='/services-6' element={<Services6 />}></Route>
                <Route path='/services-7' element={<Services7 />}></Route>
                <Route path='/service-details' element={<ServicesDetails />}></Route>
                <Route path='/counter' element={<CounterPage />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/shop-details' element={<ShopDetails />}></Route>
                <Route path='/portfolio' element={<Portfolio />}></Route>
                <Route path='/portfolio-2' element={<Portfolio2 />}></Route>
                <Route path='/portfolio-3' element={<Portfolio3 />}></Route>
                <Route path='/portfolio-4' element={<Portfolio4 />}></Route>
                <Route path='/portfolio-details' element={<PortfolioDetails />}></Route>
                <Route path='/team' element={<Team1 />}></Route>
                <Route path='/team-2' element={<Team2 />}></Route>
                <Route path='/team-3' element={<Team3 />}></Route>
                <Route path='/team-4' element={<Team4 />}></Route>
                <Route path='/team-profile' element={<TeamProfile />}></Route>
                <Route path='/pricing' element={<Pricing />}></Route>
                <Route path='/pricing-2' element={<Pricing2 />}></Route>
                <Route path='/pricing-3' element={<Pricing3 />}></Route>
                <Route path='/pricing-4' element={<Pricing4 />}></Route>
                <Route path='/pricing-5' element={<Pricing5 />}></Route>
                <Route path='/pricing-6' element={<Pricing6 />}></Route>
                <Route path='/testimonial' element={<Testimonial />}></Route>
                <Route path='/testimonial-2' element={<Testimonial2 />}></Route>
                <Route path='/testimonial-3' element={<Testimonial3 />}></Route>
                <Route path='/testimonial-4' element={<Testimonial4 />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/blog-details' element={<BlogDetails />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='*' element={<Error404 />}></Route>
            </Routes>
        </>
    );
};

export default Routers;