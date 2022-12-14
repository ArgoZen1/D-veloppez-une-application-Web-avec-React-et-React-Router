import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    const { data } = props
    return (
        <NavLink to={data.id}>
            <article>
                <div className='width-container'>
                    <img src={data.cover} alt="location" />
                    <h2>{data.title}</h2>
                </div>
            </article>
        </NavLink>
    );
};

export default Card;