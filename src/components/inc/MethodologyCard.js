import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next'

import image1 from '../../assets/images/Agile.png'
import image2 from '../../assets/images/Scrum.png'
import image3 from '../../assets/images/Kanban.png'



const cards = [
    {
        id: 1,
        translationKey: 'Methodologycard1',
        image: image1
    },
    {
        id: 2,
        translationKey: 'Methodologycard2',
        image: image2
    },
    {
        id: 3,
        translationKey: 'Methodologycard3',
        image: image3
    }
]

export default function MethodologyCards() {

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
