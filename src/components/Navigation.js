import React from 'react';
import { NavLink } from 'react-router-dom';
import KasaLogo from '../images/kasa.svg';

/*
** ici on retrouve la navigation des liens "accueil et A propos"
*/

// fonction qui va gerer le style du lien actif
function navLinkBorderBottom({ isActive }) {
    return {
        borderBottom: isActive ? "#ff6060 solid 2px" : ''
    }
}
// fonction qui va gerer le style du lien actif en ajoutant une classe
function navLinkActiveClass({ isActive }) {
    return isActive ? "nav-active" : "";
}

const Navigation = () => {
    return (
        <>
            <header>
                <nav className='navigation'>
                    <div className='logo-kasa'>
                        <NavLink to='/'>
                            <img src={KasaLogo} alt="Logo Kasa" />
                        </NavLink>
                    </div>
                    <ul className='link-page'>
                        <NavLink
                            style={navLinkBorderBottom}
                            to='/' className={navLinkActiveClass}>
                            <li>Accueil</li>
                        </NavLink>
                        <NavLink style={navLinkBorderBottom}
                            to='/about' className={navLinkActiveClass}>
                            <li>A Propos</li>
                        </NavLink>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navigation;