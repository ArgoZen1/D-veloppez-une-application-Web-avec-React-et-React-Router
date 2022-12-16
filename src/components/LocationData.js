import React from 'react';
import Card from './Card';


const LocationData = (props) => {
    // on defini une constante datas qui sera egale à la props passée en parametre
    //props (data) que l'on recupere du fichier App.js
    const { datas } = props
    /*
    ** on va map sur la data pour affichier les images sur la page home
    */
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