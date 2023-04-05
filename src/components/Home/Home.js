import React from 'react';
import './Home.css';
import BannerText from './../BannerText/BannerText';
import Banner from './../Banner/Banner';


const Home = () => {
    return (
        <div>
            <BannerText></BannerText>
            <Banner></Banner>
        </div>
    );
};

export default Home;