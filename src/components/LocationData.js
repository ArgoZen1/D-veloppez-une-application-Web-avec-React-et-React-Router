import React from 'react';
import Card from './Card';


const LocationData = (props) => {

    const { datas } = props

    return (
        <>
            <div className="data-card">
                {
                    datas.map((data, index) => (
                        <div key={index}>
                            <Card data={data} />
                        </div>
                    ))}
            </div>
        </>


    );
};

export default LocationData;