import React from 'react'
import CardVentajas from './CardVentajas'
import { useTranslation } from 'react-i18next'

import image1 from '../../assets/images/MobileApp2.jpg'
import image2 from '../../assets/images/iot2.jpg'
import image3 from '../../assets/images/office365.jpg'
import image4 from '../../assets/images/security.jpg'
import image5 from '../../assets/images/PowerAutomate.png'
import image6 from '../../assets/images/flexibility.jpg'

const cards = [
    {
        id: 1,
        translationKey: 'card1',
        image: image1
    },
    {
        id: 2,
        translationKey: 'card2',
        image: image2
    },
    {
        id: 3,
        translationKey: 'card3',
        image: image3
    },
    {
        id: 4,
        translationKey: 'card4',
        image: image4
    },
    {
        id: 5,
        translationKey: 'card5',
        image: image5
    },
    {
        id: 6,
        translationKey: 'card6',
        image: image6
    },

]

export default function Cards() {

    const {t} = useTranslation();

    return (
        <div className="container cards d-flex justify-content-center align-items-center h-100">
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <CardVentajas 
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
