import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from './Headers';
import Footer from './Footer';

const Root2 = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root2;