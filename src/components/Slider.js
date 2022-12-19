import React, { useState } from "react";
import arrowRight from "../images/arrowRight.svg";

/*
** ici on retrouve le slider du projet
*/

function Slider({ images }) {
    // on defini un useState à 0 (l'image est au point de depart)
    let [showPicture, setShowPicture] = useState(0);
    // on recupere le nombre d'images
    let numberImg = images.length;
    /*
    ** si l'image est à 0 (premiere image) alors on fait -1 pour aller à l'image precedente
    ** si l'image n'est pas à 0 alors on fait un setShowPicture(showPicture - 1) pour retourner à l'image precedente
    */
    const imgPrevious = () => {
        if (showPicture === 0) {
            setShowPicture(numberImg - 1);
        } else {
            setShowPicture(showPicture - 1);
        }

    };
    /*
    ** ici on fait -1 et on declare numberImg à 0 afin de pouvoir défiler les images sans blocage
    ** le else setShowPicture(showPicture + 1) permet de faire defiler les images
    */
    const imgNext = () => {
        if (showPicture === numberImg - 1) {
            numberImg = 0

            setShowPicture(numberImg);

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
            {   /*
                ** ici on va map sur le tableau d'images afin de recuperer chaque image une par une.
                ** on utilise l'index pour cibler la bonne image, sinon nous aurons toutes les images d'afficher
                */

                images.map((image, index) => {
                    return (
                        <img key={index} className={index === showPicture ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Lodging" />
                    )
                })
            }
            {   /* au click sur la fleche suivante on fait défiler les images */}
            {numberImg > 1 ? (

                <img className="arrow arrow-right" src={arrowRight} alt="next" onClick={imgNext} />

            ) : null}





        </div>

    );
}

export default Slider;