import React from 'react';
import banner from '../images/banner.png'
import bannergrey from '../images/bannergrey.svg'

/*
** composant de la banniere de la page home
*/
const Banner = () => {

    return (
        <>
            <div className='absolute-banner'>
                <h1>Chez vous, partout et ailleurs</h1>
                <img className='banner' src={banner} alt="une forêt près de la mer" />
                <img className='banner-grey' src={bannergrey} alt="fond gris par dessus" />
            </div>

        </>

    );
};

export default Banner;