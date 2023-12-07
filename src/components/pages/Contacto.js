import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Form from '../inc/Form';

import { useTranslation } from 'react-i18next';

export default function Contacto() {
    
    const [t] = useTranslation();

    return (
        <div className='newpage'>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-left">
                                    <h5>{t("contacto.form")}</h5>
                                    <div className="underline"></div>
                                    <hr />
                                    <div data-form-alert="true"></div>
                                    <Form />
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5>{t("contacto.address")}</h5>
                                    <div className="underline"></div>
                                    <div>
                                        <iframe 
                                            title="myFrame" 
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.821224086094!2d-3.448039784771559!3d40.3019282705376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd423f096f685e1d%3A0x634e684603a6bb2e!2sAv.%20del%20Ej%C3%A9rcito%2C%2032%2C%2028500%20Arganda%20del%20Rey%2C%20Madrid!5e0!3m2!1ses!2ses!4v1653454537914!5m2!1ses!2ses" 
                                            width="600" 
                                            height="450" 
                                            style={{ border: 0 }}
                                            allowfullscreen="" 
                                            loading="lazy" 
                                            referrerpolicy="no-referrer-when-downgrade"
                                        >
                                        </iframe>
                                    </div>
                                    <hr />
                                    <div>
                                        <p className="text-center">
                                            {t("contacto.phone")} 
                                            <a href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20Apps%20Lean%20IT.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" target="_blank" rel="noopener noreferrer"> +34 648 808 368</a>
                                            <a href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20Apps%20Lean%20IT.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" className="whatsapp social" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                                            </a>
                                            |   {t("contacto.email")} 
                                            <a href="#bottom"> info@AppsLeanIT.com</a>
                                        </p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
