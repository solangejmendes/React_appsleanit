import React from 'react';
import metodologia from '../../assets/images/AgileByDesign.png';
import MethodologyCards from '../inc/MethodologyCard';

import { useTranslation } from 'react-i18next'


export default function Metodologia() {

    const [t] = useTranslation();

    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top">
                <div className="container">
                    {/* Title */}
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                {t("metodologia.title")} 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="row">                    
                        <div className="col-md-12 text-center">
                            <h6 className="text-center">
                                {t("metodologia.subtitle")}    
                            </h6>
                        </div>
                    </div>

                    {/* Cards in their own full-width row */}
                    <div className="row col-12 mb-4"> 
                        <MethodologyCards />
                    </div>


                    {/* 50/50 split: image left, bullets right */}
                    <div className="row align-items-center g-4 mt-2">
                        
                        {/* Left column → Image */}
                        <div className="col-md-6">
                            <img 
                                src={metodologia} 
                                className="img-fluid border-bottom" 
                                alt="agua" 
                                style={{ maxWidth: "60%", height: "auto" }} 
                            />
                        </div>

                        {/* Right column → Bullet points */}
                        <div className="col-md-6 text-start">
                            <h3 className="main-heading">
                                {t("metodologia.benefitstitle")} 
                            </h3>
                            <p></p>
                            <h6 className="text-left">{t("metodologia.benefits")}</h6>
                            <ul className="list-unstyled">
                                <li><strong>1.</strong> {t("metodologia.1")}</li>
                                <li><strong>2.</strong> {t("metodologia.2")}</li>
                                <li><strong>3.</strong> {t("metodologia.3")}</li>
                                <li><strong>4.</strong> {t("metodologia.4")}</li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </section>
        </div>
    )
}