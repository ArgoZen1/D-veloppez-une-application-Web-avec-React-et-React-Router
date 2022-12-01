import React from 'react';
import { NavLink } from 'react-router-dom';
import KasaLogo from '../images/kasa.svg'


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
                        <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>accueil</li>
                        </NavLink>
                        <NavLink to='/about' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>A propos</li>
                        </NavLink>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navigation;