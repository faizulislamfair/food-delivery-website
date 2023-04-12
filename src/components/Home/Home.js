import React from 'react';
import './Home.css';
import BannerText from './../BannerText/BannerText';
import Banner from './../Banner/Banner';
import BannerDivider from './../BannerDivider/BannerDivider';
import AboutUs from './../AboutUs/AboutUs';
import FeaturedDishes from './../FeaturedDishes/FeaturedDishes';
import Testimonial from '../Testimonial/Testimonial';
import CallToAction from './../CallToAction/CallToAction';
import LinkFindContact from '../LinkFindContact/LinkFindContact';
import StayUpToDate from '../StayUpToDate/StayUpToDate';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <BannerText />
            <Banner />
            <BannerDivider />
            <AboutUs />
            <FeaturedDishes />
            <Testimonial />
            <CallToAction />
            <LinkFindContact />
            <StayUpToDate />
            <Footer />
        </div>
    );
};

export default Home;







