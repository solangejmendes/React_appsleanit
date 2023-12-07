import React from 'react';
import WhiteCard from './WhiteCard';
import { useTranslation } from 'react-i18next';

import image1 from '../../assets/images/PowerApps.jpg'
import image2 from '../../assets/images/PowerAutomate3.PNG'
import image3 from '../../assets/images/powerBI.png'

const cardData = [
    {
        id: 1,
        translationKey: 'whitecard1',
        title: 'PowerApps',
        image: image1,
        url: "",
    },
    {
        id: 2,
        translationKey: 'whitecard2',
        title: 'Power Automate',
        image: image2,
        text: "Plataforma de programación para desarrollar flujos automáticos de trabajo o aprobación, notificaciones, alertas, etc. integrados con otras aplicaciones de Microsoft Office 365 como Outlook, Teams, SharePoint, OneDrive, entre otras, permitiendo un incremento sustancial de la productividad de los procesos de negocio.",
        url: "",
    },
    {
        id: 3,
        translationKey: 'whitecard3',
        title: 'Power BI',
        image: image3,
        text: 'Plataforma de business intelligence que integra toda la información contenida en una variedad muy amplia y diversificada de bases de datos de Azure y Microsoft, relacionarlas y transformar en un modelo analítico de los indicadores de proceso de su negocio.',
        url: "",
    }
];

export default function WhiteCards() {

    const {t} = useTranslation();

    return (
    <div className="container cards d-flex justify-content-center align-items-center h-100">
        <div className='row'>
            {
                cardData.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <WhiteCard 
                            title={t(`translation:${card.translationKey}.title`)}
                            text={t(`translation:${card.translationKey}.text`)}
                            imageSource={card.image}
                            url={t(`translation:${card.translationKey}.url`)}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
