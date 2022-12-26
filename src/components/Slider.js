import React, { useState } from "react";
import arrowRight from "../images/arrowRight.svg";

/*
** ici on retrouve le slider du projet
*/

function Slider({ images }) {
    let [position, setPosition] = useState(1);
    // on declare la variable showPicture qui va nous permettre de gerer l'image affichée et on l'initialise à 0 (premiere image) 
    let [showPicture, setShowPicture] = useState(0);
    // on recupere le nombre d'images  avec images.length et on le stocke dans numberImg pour pouvoir faire defiler les images sans blocage 
    let numberImg = images.length;

    // on fait une fonction qui va gerer le click sur la fleche precedente et qui va faire defiler les images en arriere 
    const imgPrevious = () => {
        position === 1 ? setPosition(numberImg) : setPosition(position - 1);
        // si showPicture est égale à 0 alors on affiche la derniere image
        if (showPicture === 0) {
            setShowPicture(numberImg - 1);
            // sinon on affiche l'image precedente
        } else {
            setShowPicture(showPicture - 1);
        }

    };

    // on fait une fonction qui va gerer le click sur la fleche suivante et qui va faire defiler les images en avant
    const imgNext = () => {
        position === numberImg ? setPosition(1) : setPosition(position + 1);
        // si showPicture est égale au nombre d'images -1 alors on affiche la premiere image
        if (showPicture === numberImg - 1) {
            numberImg = 0

            setShowPicture(numberImg);
            // sinon on affiche l'image suivante
        } else {
            setShowPicture(showPicture + 1);
        }

    };

    return (

        <div className="carrousel">

            {/* au click sur la fleche précedente on fait défiler les images */}
            {/* si numberImg est superieur à 1 on affiche les flêches */}
            {numberImg > 1 ? (

                <img className="arrow arrow-left" src={arrowRight} alt="previous" onClick={imgPrevious} />

            ) : null}
            {
                // on map sur les images pour les afficher
                images.map((image, index) => {
                    return (
                        <img key={image} className={index === showPicture ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Lodging" />
                    )
                })
            }
            <p className="position">{position}/{numberImg}</p>
            {/* au click sur la fleche suivante on fait défiler les images */}
            {numberImg > 1 ? (

                <img className="arrow arrow-right" src={arrowRight} alt="next" onClick={imgNext} />

            ) : null}

        </div>

    );
}

export default Slider;