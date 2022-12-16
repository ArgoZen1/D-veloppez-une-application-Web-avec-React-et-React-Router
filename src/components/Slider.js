import React, { useState } from "react";
import arrowRight from "../images/arrowRight.svg";


function Slider({ images }) {

    let [showPicture, setShowPicture] = useState(0);
    let numberImg = images.length;

    const imgPrevious = () => {
        if (showPicture === 0) {
            setShowPicture(numberImg - 1);
        } else {
            setShowPicture(showPicture - 1);
        }
        return (setShowPicture);
    };

    const imgNext = () => {
        if (showPicture === numberImg - 1) {
            setShowPicture(numberImg = 0);

        } else {
            setShowPicture(showPicture + 1);
        }
        return (setShowPicture);
    };

    return (
        <div className="carrousel">
            {
                numberImg > 1 && <img className="arrow arrow-left" src={arrowRight} alt="previous" onClick={imgPrevious} />
            }
            {
                images.map((image, index) => {
                    return (
                        <img key={index} className={index === showPicture ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Lodging" />
                    )
                })
            }
            {
                numberImg > 1 && <img className="arrow arrow-right" src={arrowRight} alt="next" onClick={imgNext} />
            }
        </div>
    );
}

export default Slider;