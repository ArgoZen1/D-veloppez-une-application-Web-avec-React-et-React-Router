
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import starColor from '../images/stars.svg';
import star from '../images/starsUncol.svg';
import Error404 from './Error404';

const Lodging = (props) => {
    const { productId } = useParams();

    const { datas } = props;

    const product = datas.find((product) => product.id === productId);
    if (!product) {
        return <Error404 />;
    }
    const { title, location, rating, host, equipments, description, pictures, cover, tags } =
        product;

    console.log(tags)

    const StarsColor = () => {
        return <img src={starColor} alt="stars" />
    }
    const Stars = () => {
        return <img src={star} alt="stars" />
    }

    return (
        <div>
            <Navigation />
            <div>
                <img src={cover} alt="image fiche logement"></img>
            </div>
            <h1 className="singleproduct__title">{title}</h1>
            <h2 className='singleproduct__title2'>{location}</h2>
            <ul>{tags.map((tag, index) =>
                <li key={index}>
                    {tag}
                </li>
            )}</ul>
            <div className="stars">
                {Array.from({ length: parseInt(rating) }, (v, idx) => <StarsColor key={idx} />)}
                {Array.from({ length: 5 - parseInt(rating) }, (v, idx) => <Stars key={idx} />)}
            </div>
            <div>
                <h2>Description</h2>
                <p>{description}</p>
            </div>
            <div>
                <h2>Equipements</h2>
                <ul>{equipments.map((equipment, index) =>
                    <li key={index}>
                        {equipment}
                    </li>
                )}</ul>
            </div>
        </div>
    );

};


export default Lodging;