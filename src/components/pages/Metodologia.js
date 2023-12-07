import React from 'react';
import metodologia from '../../assets/images/Metodologia.PNG';
import { useTranslation } from 'react-i18next'


export default function Metodologia() {

    const [t] = useTranslation();

    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                {t("metodologia.title")} 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-center">
                        <h6 className="text-center">
                        {t("metodologia.subtitle")}    
                        </h6>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <h6>1</h6>
                                <p>
                                    {t("metodologia.1")}
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h6>2</h6>
                                <p>
                                    {t("metodologia.2")}
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h6>3</h6>
                                <p>
                                    {t("metodologia.3")}
                                </p>
                            </div>
                        </div>
                        <img src={metodologia} className="w-100 border-bottom" alt="agua" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}