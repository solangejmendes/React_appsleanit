import React, {useState} from "react";
import i18n from "../../i18n";
import EnFlag from '../../assets/images/Flag_of_United_Kingdom_Flat_Wavy-512x295.png';

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }

    return (
        <select className="lang-menu selected-lang" defaultValue={selectedLanguage} onChange={chooseLanguage}>  
            <option value="en" className="en">
                <img src={EnFlag} alt="english language" />
                English
            </option>
            <option value="es" className="es">Español</option>
            <option value="pt" className="pt">Português</option>
        </select>
    );
};

export default LanguageSelector;