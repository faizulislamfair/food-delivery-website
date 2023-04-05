import React from 'react';
import './Home.css';
import BannerText from './../BannerText/BannerText';
import Banner from './../Banner/Banner';
import About from './../About_us/About';

const Home = () => {
    return (
        <div>
            <BannerText></BannerText>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;