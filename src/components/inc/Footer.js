import React from 'react';
import { Link } from 'react-router-dom';
import SocialFollow from './SocialFollow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const [t] = useTranslation();

    return (
        <div>
            
            <section className="section footer bg-dark text-white">
                <div className="container">
                    <div className="row">
                        
                        <div className="row">
                            <div className="col-md-12">
                                <SocialFollow />
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-md-4">
                            <h6>{t("footer.Actividades0")}</h6>
                            <hr/>
                            <p className="text-white">{t("footer.Actividades1")}</p>
                            <p className="text-white">{t("footer.Actividades2")}</p>
                            <p className="text-white">{t("footer.Actividades3")}</p>    
                        </div>

                        <div className="col-md-4">
                            <h6>{t("footer.Rutas0")}</h6>
                            <hr/>
                            <div><Link to="/">{t("footer.Rutas1")}</Link></div>
                            <div><Link to="/quiensomos">{t("footer.Rutas4")}</Link></div>
                            <div><Link to="/servicios">{t("footer.Rutas2")}</Link></div>
                            <div><Link to="/productos">{t("footer.Rutas3")}</Link></div>
                            <div><Link to="/contacto">{t("footer.Rutas5")}</Link></div>
                        </div>

                        <div className="col-md-4">
                            <h6>{t("footer.Contacto0")}</h6>
                            <hr/>
                            <div><p className="text-white mb-1">{t("footer.Contacto1")}</p></div>
                            <div><p className="text-white mb-1">{t("footer.Contacto2")}</p></div>
                            <div><p className="text-white mb-1">{t("footer.Contacto3")}</p></div>
                            <div>
                                <p className="text-white mb-1">
                                    {t("footer.phone")} 
                                    <a href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20Apps%20Lean%20IT.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" className="text-white mb-1" target="_blank" rel="noopener noreferrer"> +34 648 808 368</a>
                                    <a href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20Apps%20Lean%20IT.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" className="whatsapp social" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="text-white mb-1">
                                    email: 
                                    <a href="#bottom" className="text-white mb-1"> info@AppsLeanIT.com</a>
                                </p>
                            </div>
                        </div>
                        </div>
                        
                        <hr />

                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-white text-center">
                                    {t("footer.design1")}  
                                    <a href="http://www.appsleanit.com/" className="web social" target="_blank" rel="noopener noreferrer">AppsLeanIT</a>
                                    {t("footer.design2")}
                                </p>                
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}
