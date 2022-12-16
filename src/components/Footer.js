import React from 'react';
import kasaWhite from '../images/kasaWhite.svg'

/*
** le composant du footer qu'on peut réutiliser partout.
*/
const Footer = () => {
    return (
        <div className='footer-align'>
            <footer>
                <h2><img src={kasaWhite}></img></h2>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
};

export default Footer;