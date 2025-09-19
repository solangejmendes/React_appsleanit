import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import LanguageSelector from './LanguageSelector';
import ContactNum from './ContactNum';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const [t] = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top shadow py-3">
            <div className="container-fluid">
                
                {/* Logo */}
                <NavLink to="/" className="navbar-brand d-flex align-items-center">
                    <img className="logo me-2" src={logo} alt="logo" style={{ width: '40px' }} />
                    Apps Lean IT
                </NavLink>

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenido colapsable */}
                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    
                    {/* Menú centrado */}
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-column flex-lg-row justify-content-center w-100 text-lg-center text-end">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link navbar-text">{t("header.navHome")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/quiensomos" className="nav-link navbar-text">{t("header.navAbout")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/servicios" className="nav-link navbar-text">{t("header.navServices")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/metodologia" className="nav-link navbar-text">{t("header.navMeth")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/productos" className="nav-link navbar-text">{t("header.navProd")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/articles" className="nav-link navbar-text">{t("header.navArt")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/partners" className="nav-link navbar-text">{t("header.navPart")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacto" className="nav-link navbar-text">{t("header.navContact")}</NavLink>
                        </li>
                    </ul>

                    {/* Selector de idioma + contacto */}
                    <div className="d-flex flex-lg-row flex-column align-items-lg-center align-items-end justify-content-lg-end justify-content-center text-end gap-2 ms-lg-3 mt-3 mt-lg-0 w-100 w-lg-auto">
                        <div className="lang-wrapper">
                            <LanguageSelector />
                        </div>
                        <div className="contact-wrapper">
                            <ContactNum />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

