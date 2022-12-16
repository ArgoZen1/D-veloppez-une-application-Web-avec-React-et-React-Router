import React from 'react';
import { NavLink } from 'react-router-dom';
import KasaLogo from '../images/kasa.svg';

/*
** ici on retrouve la navigation des liens "accueil et A propos"
*/
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
                        <NavLink style={({ isActive }) => ({
                            borderBottom: isActive ? "#ff6060 solid 2px" : ''
                        })}
                            to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>accueil</li>
                        </NavLink>
                        <NavLink style={({ isActive }) => ({
                            borderBottom: isActive ? "#ff6060 solid 2px" : ''
                        })}
                            to='/about' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>A propos</li>
                        </NavLink>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navigation;