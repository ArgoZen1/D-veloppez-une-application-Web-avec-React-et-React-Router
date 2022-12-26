import React, { useState } from 'react';
import "../styles/styles.css";
import arrow from "../images/arrowDown.svg";
// 
const Collapse = ({ title, description }) => {
    // on va utiliser un useState pour gerer l'ouverture du dropdown et le fermer si on click dessus à nouveau 
    const [open, setOPen] = useState(false);

    return (
        <div className="collapse" id={`collapse-${title}`}>
            <div className="header-collapse">
                <div className="title-collapse">{title}</div>
                <span className={`arrow-collapse ${open}`} onClick={() => setOPen(!open)}>
                    <img src={arrow} alt="Ouvrir le texte" />

                </span>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                open && <div className="description-collapse">{description}</div>

            }
        </div>
    );
};

export default Collapse;