import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Lodging = (props) => {
    const { productId } = useParams();

    const { datas } = props
    console.log(datas)



    const product = datas.find((product) => product.id === productId);
    const { title, location, rating, host, equipments, description, pictures } =
        product;





    return (
        <div>

            <h1 className="singleproduct__title">{title}</h1>

        </div>
    );

};


export default Lodging;