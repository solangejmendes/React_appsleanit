import React from 'react';

import { useTranslation } from 'react-i18next'

import partner1 from '../../assets/images/MicrosoftPartner.jpg';
import partner2 from '../../assets/images/logobeCloud.png';
import partner3 from '../../assets/images/ILSSI Logo.png';
import partner4 from '../../assets/images/Logo_LSSsis.png';


export default function Partners() {

    const [t] = useTranslation();

    const partners = [
        { img: partner1, url: "https://www.microsoft.com/en-us" },
        { img: partner2, url: "https://www.be-cloud.fr" },
        { img: partner3, url: "https://ilssi.org"},
        { img: partner4, url: "https://leansixsigmasis.com/" }
    ];

    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top">
                <div className="container">

                    {/* Title */}
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                {t("partners.title")} 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="row">                    
                        <div className="col-md-12 text-center">
                            <h6 className="text-center">
                                {t("partners.subtitle")}    
                            </h6>
                        </div>
                    </div>

                    {/* Partner Images */}
                    <div className="row text-center mt-4">
                        {partners.map((partner, index) => (
                            <div className="col-md-6 mb-6" key={index}>
                                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={partner.img} 
                                        alt={`Partner ${index + 1}`} 
                                        className="img-fluid rounded shadow-sm"
                                        style={{ maxHeight: "150px", objectFit: "contain" }}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}