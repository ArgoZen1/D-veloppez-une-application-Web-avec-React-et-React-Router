import React, { useState } from 'react';
import "../styles/styles.css";
import arrow from "../images/arrowDown.svg";
const Collapse = ({ title, description }) => {

    const [open, setOPen] = useState(false);
    /*
    ** ici on va gerer l'ouverture des dropwdown, si c'est à false alors qu'on on click il sera à true et ouvrira le texte
    */
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