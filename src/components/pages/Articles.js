import React from 'react';
import Cardshorizontal from '../inc/Cardshorizontal';
import { useTranslation } from 'react-i18next'
import Cardshorizontalarticle from '../inc/Cardshorizontalarticle';


export default function Articles() {

    const [t] = useTranslation();

    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                {t("articles.title")}  
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-center">
                        <h6 className="text-center">
                            {t("articles.subtitle")}   
                        </h6>
                        <div className='Bkground3'>
                            <Cardshorizontalarticle />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}