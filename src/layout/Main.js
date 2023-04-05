import React from 'react';
import Header from './../components/Header/Header';
import { Outlet } from 'react-router-dom';
import About from '../components/About_us/About';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;