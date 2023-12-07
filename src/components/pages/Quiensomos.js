import React from 'react';
import Slider from '../inc/Slider'
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
                        <div className="col-md-12 left">
                            <p>
                                {t("aboutus.paragraph1")} 
                            </p>
                            <p>
                                {t("aboutus.paragraph2")}
                            </p>
                            <ul>
                                <li>{t("aboutus.paragraph3")}</li>
                                <li>{t("aboutus.paragraph4")} </li>
                                <li>{t("aboutus.paragraph5")}</li>

                            </ul>
                            <br/>
                            <p>
                                {t("aboutus.paragraph6")} 
                            </p>
                            <Slider />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
