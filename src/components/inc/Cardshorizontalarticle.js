import React from 'react'
import Cardhorizontalarticles from './Cardhorizontalarticles'
import { useTranslation } from 'react-i18next'

import imagearticle1 from '../../assets/images/LeanPowerBox.jpg'
import imagearticle2 from '../../assets/images/AppsLeanIT Banner.jpg'
import imagearticle3 from '../../assets/images/LeanOportunity.png'
import imagearticle4 from '../../assets/images/LeanConfiguration.png'
import imagearticle5 from '../../assets/images/MicrosoftPartner.jpg'
import imagearticle6 from '../../assets/images/LeanKanban.png'
import imagearticle7 from '../../assets/images/Cineplex.jpg'



const cards = [
    {
        id: 7,
        translationKey: 'horizontalcardarticle7',
        image: imagearticle7
    },
    {
        id: 6,
        translationKey: 'horizontalcardarticle6',
        image: imagearticle6
    },
    {
        id: 5,
        translationKey: 'horizontalcardarticle5',
        image: imagearticle5
    },
    {
        id: 4,
        translationKey: 'horizontalcardarticle4',
        image: imagearticle4
    },
    {
        id: 3,
        translationKey: 'horizontalcardarticle3',
        image: imagearticle3
    },
    {
        id: 2,
        translationKey: 'horizontalcardarticle2',
        image: imagearticle2
    },
    {
        id: 1,
        translationKey: 'horizontalcardarticle1',
        image: imagearticle1
    }
]

export default function Cardshorizontalarticle() {
  
    const {t} = useTranslation();

    return (
    <div className="container cards d-flex justify-content-center align-items-center h-100">
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-12' key={card.id}>
                        <Cardhorizontalarticles 
                            date={t(`translation:${card.translationKey}.date`)}
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

