import React from 'react';
import { useTranslation } from 'react-i18next'

const ContactNum = () => {

    const [t] = useTranslation();
    
    return (
        <div className="container" id="navbarSupportedContent">
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
            </button>

            <form class="form-inline position-absolute top-50 end-0 translate-middle-y">
            {/*--- <button class="btn btn-sm btn-outline-secondary btn-lg text-white" type="button">Llámanos 648 808 368</button>
            <a href="#" class="btn btn-button1 btn-sm" role="button" aria-pressed="true">Primary link</a>--*/}
                <a 
                    href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20Apps%20Lean%20IT.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" 
                    className="btn btn-sm btn-outline-secondary btn-lg text-white" 
                    role="button" 
                    aria-pressed="true"
                    >
                        {t("header.phone")}
                </a>
            </form>
        </div>
    );
};

export default ContactNum;




