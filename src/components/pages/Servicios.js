import React from 'react';
import ServiceCards from '../inc/ServiceCards';

import { useTranslation } from 'react-i18next';


export default function Servicios() {

    const [t] = useTranslation();

    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                {t("servicios.title")} 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-center">
                        <h6 className="text-center">
                            {t("servicios.subtitle")}    
                        </h6>
                        <ServiceCards />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
