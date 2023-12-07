import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next'

import image1 from '../../assets/images/digitalization.png'
import image2 from '../../assets/images/Automatization.jpg'
import image3 from '../../assets/images/Integration.jpg'
import image4 from '../../assets/images/Analitics1.png'
import image5 from '../../assets/images/Maintenance.jpg'
import image6 from '../../assets/images/Consultoria.jpg'


const cards = [
    {
        id: 1,
        translationKey: 'servicecard1',
        image: image1
    },
    {
        id: 2,
        translationKey: 'servicecard2',
        image: image2
    },
    {
        id: 3,
        translationKey: 'servicecard3',
        image: image3
    },
    {
        id: 4,
        translationKey: 'servicecard4',
        image: image4
    },
    {
        id: 5,
        translationKey: 'servicecard5',
        image: image5
    },
    {
        id: 6,
        translationKey: 'servicecard6',
        image: image6
    }
]

export default function ServiceCards() {

    const {t} = useTranslation();

    return (
        <div className="container cards d-flex justify-content-center align-items-center h-100">
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <Card 
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
