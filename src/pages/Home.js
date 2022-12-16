import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import LocationData from '../components/LocationData';
import Navigation from '../components/Navigation';

/*
** Page principale on on y retrouver les composants Navigation, Banner, 
** LocationData (pour afficher la data du fichier JSON) et le footer
*/

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