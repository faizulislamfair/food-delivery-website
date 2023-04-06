import React from 'react';
import './Home.css';
import BannerText from './../BannerText/BannerText';
import Banner from './../Banner/Banner';
import About from './../About_us/About';
import BannerDivider from './../BannerDivider/BannerDivider';

const Home = () => {
    return (
        <div>
            <BannerText></BannerText>
            <Banner></Banner>
            <BannerDivider></BannerDivider>
            <About></About>
        </div>
    );
};

export default Home;