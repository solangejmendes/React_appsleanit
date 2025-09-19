import React from 'react';
import aboutusimage from '../../assets/images/AboutUs.png';

import { useTranslation } from 'react-i18next';

export default function Quiensomos() {

    const [t] = useTranslation();

    return (
        <div className='newpage'>        
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                {t("aboutus.title")} 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        {/* 50/50 split: image left, bullets right */}
                        <div className="row align-items-center g-4 mt-2">
                            
                            {/* Left column → Image */}
                            <div className="col-md-6">
                                <img 
                                    src={aboutusimage} 
                                    className="img-fluid border-bottom" 
                                    alt="agua" 
                                    style={{ maxWidth: "100%", height: "auto" }} 
                                />
                            </div>

                            {/* Right column → Bullet points */}
                            <div className="col-md-6 text-start">
                                <div className="col-md-12 left">
                                    <p>
                                        {t("aboutus.paragraph1")} 
                                    </p>
                                    <p>
                                        {t("aboutus.paragraph2")}
                                    </p>
                                                                <p>
                                        {t("aboutus.paragraph3")}
                                    </p>
                                    <ul>
                                        <li>{t("aboutus.paragraph4")}</li>
                                        <li>{t("aboutus.paragraph5")} </li>
                                        <li>{t("aboutus.paragraph6")}</li>

                                    </ul>
                                    <br/>
                                    <p>
                                        {t("aboutus.paragraph7")} 
                                    </p>
                                </div>    
                            </div>
                            {/*<Slider />*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
