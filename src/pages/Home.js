import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import LocationData from '../components/LocationData';
import Navigation from '../components/Navigation';

const Home = (props) => {
    const { datas } = props

    return (
        <div>
            <Navigation />
            <Banner />
            <LocationData datas={datas} />
            <Footer />
        </div>
    );
};

export default Home;