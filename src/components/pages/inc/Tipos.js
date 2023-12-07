import React from 'react'
//import CardsTipos from '../../inc/CardsTipos'
import WhiteCards from '../../inc/WhiteCards';
import { useTranslation } from 'react-i18next';

export default function Tipos() {
    
    const {t} = useTranslation();

    return (
        <div>
            <section className="section border-top">
                <div className="row"></div>
                <div className="col-md-12 text-center">
                    <h3 className="main-heading">
                        {t("tipos.title")}
                    </h3>
                    <div className="underline mx-auto"></div>
                </div>
                <h6 className="text-center">
                    {t("tipos.subtitle")}  
                </h6>
                <WhiteCards/>
            </section>
        </div>
    )
}
