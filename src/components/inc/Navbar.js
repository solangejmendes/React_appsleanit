import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
//import LanguageSwitcher from './LanguageSwitcher'
import LanguageSelector from './LanguageSelector';
import ContactNum from './ContactNum';
import { useTranslation } from 'react-i18next'

//import { scrollTo } from 'react-scroll';

export default function Navbar() {

    const [t] = useTranslation();

    return (
        <div>
               
            {/*--- Navbar --*/}
            <nav className="navbar fixed-top d-flex navbar-custom navbar-expand-lg navbar-collapse collpase py-3 py-lg-5 shadow ">
                
                <NavLink to="/" className="navbar-brand col-md-3">
                    <img className="logo" src={logo} alt="logo" width="15%" />
                    Apps Lean IT  
                </NavLink>

                <div className="container col-md-6" id="navbarSupportedContent">
                    <ul className="nav justify-content-center navbar-nav position-absolute top-50 start-50 translate-middle">
                        <li className="nav-item">
                            <NavLink 
                                to="/"
                                className="nav-link navbar-text"
                            >
                                {t("header.navHome")}  
                            </NavLink>
                        </li>                
                        <li className="nav-item">
                            <NavLink 
                                to="/quiensomos"
                                className="nav-link navbar-text"
                            >
                                {t("header.navAbout")} 
                            </NavLink>
                        </li>           
                        <li className="nav-item">
                            <NavLink 
                                to="/contacto" 
                                className="nav-link navbar-text"
                            >
                                {t("header.navContact")}
                            </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink 
                                to="/servicios" 
                                className="nav-link navbar-text"
                            >
                                {t("header.navServices")}
                            </NavLink>
                        </li>      
                        <li className="nav-item">
                            <NavLink 
                                to="/metodologia" 
                                className="nav-link navbar-text"
                            >
                                {t("header.navMeth")}
                            </NavLink>
                        </li>      
                        <li className="nav-item">
                            <NavLink 
                                to="/productos" 
                                className="nav-link navbar-text"
                            >
                                {t("header.navProd")}
                            </NavLink>
                        </li>  
                    </ul>
                </div>

                <div className="nav justify-content-center navbar-nav position-absolute top-50 end-0 translate-middle col-md-3">
                    <LanguageSelector />
                    <ContactNum />
                </div>

            </nav>
            {/*-- Navbar --*/}

        </div>
    )
}
