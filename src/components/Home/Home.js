import React from 'react';
import './Home.css';
import BannerText from './../BannerText/BannerText';
import Banner from './../Banner/Banner';
import BannerDivider from './../BannerDivider/BannerDivider';
import About from './../About_us/About';
import FeaturedDishes from './../FeaturedDishes/FeaturedDishes';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <BannerText />
            <Banner />
            <BannerDivider />
            <About />
            <FeaturedDishes />
            <Testimonial />
        </div>
    );
};

export default Home;