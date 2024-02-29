import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeEight from './pages/homePages/HomeEight';
import ServicesDetails from './pages/servicesPages/ServicesDetails';
import ItalyServiceDetails from './pages/servicesPages/ItalyServiceDetails';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import Error404 from './pages/error/Error404';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeEight />}></Route>
                
                
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/service-details' element={<ServicesDetails />}></Route>
                <Route path='/italy-details' element={<ItalyServiceDetails />}></Route>
                <Route path="/college-finder" element={<Blog/>}></Route>
                <Route path='*' element={<Error404 />}></Route>
            </Routes>
        </>
    );
};

export default Routers;