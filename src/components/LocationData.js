import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Lodging from '../pages/Lodging';
import { Link } from 'react-router-dom';



const LocationData = (props) => {
    const { datas } = props


    // const [data, setData] = useState([])
    // const [isLoad, setIsLoad] = useState(true)

    // useEffect(() => {
    //     if (isLoad) {
    //         axios.get('data.json')
    //             .then((res) => {
    //                 setData(res.data);
    //             }).catch((err) => {
    //                 console.log(err);
    //             })
    //     }
    //     setIsLoad(false)
    // }, [isLoad])


    return (
        <>
            <div className="data-card">
                {
                    datas.map((data, index) => (

                        <div key={index}>
                            {/* <Link to="/:productId" component={<Lodging />}> */}
                            <Card data={data} />
                            {/* </Link> */}


                        </div>

                    ))}
            </div>

            {/* <div className="data-about">
                {
                    data.map((data, index) => (
                        <div key={index}>
                            <Lodging data={data} />
                        </div>
                    ))}
            </div> */}
        </>


    );
};

export default LocationData;