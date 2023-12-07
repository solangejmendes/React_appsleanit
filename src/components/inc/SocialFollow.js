import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faSkype
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next'

export default function SocialFlow() {

    const [t] = useTranslation();

    return (
        <div>
            <div className="section bg-dark">
                <div className="social-container">
                    <p className="text-white">{t("footer.follow")}</p>
                    <a
                        className="linkedin social"
                        href="https://www.linkedin.com/company/apps-lean-it"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                    <a 
                        className="youtube social"
                        href="https://www.youtube.com/channel/UCCm53cWs7fKZx0i90WMEfTg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a 
                        className="facebook social"
                        href="https://www.facebook.com/Apps-Lean-IT-947612698595370"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                        className="instagram social"
                        href="#bottom"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a 
                        className="twitter social"
                        href="https://twitter.com/AppsLeanIT"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a 
                        className="whatsapp social"
                        href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20Apps%20Lean%20IT.%20%C2%BFEn%20que%20te%20puedo%20ayudar?"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                    <a 
                        className="skype social"
                        href="https://join.skype.com/invite/d979KfHZXSTh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faSkype} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}
