import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeEight from './pages/homePages/HomeEight';

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