import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactNum = () => {
    const [t] = useTranslation();

    return (
        <a 
            href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20Apps%20Lean%20IT.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" 
            className="btn btn-sm btn-outline-secondary text-white contact-button"
            role="button"
        >
            {t("header.phone")}
        </a>
    );
};

export default ContactNum;





