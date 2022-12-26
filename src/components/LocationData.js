import React from 'react';
import Card from './Card';


const LocationData = (props) => {
    // on recupere la data via les props passées en parametre dans le composant Home 
    const { datas } = props
    console.log(datas)
    /*
    ** on va map sur la data pour affichier les images sur la page home
    */
    return (
        <>
            <div className="data-card">
                {
                    datas.map((data) => (
                        <div key={data.id}>
                            <Card data={data} />
                        </div>
                    ))}
            </div>
        </>


    );
};

export default LocationData;