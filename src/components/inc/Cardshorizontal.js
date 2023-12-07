import React from 'react'
import Cardhorizontal from './Cardhorizontal'
import { useTranslation } from 'react-i18next'

import image1 from '../../assets/images/Auditorias_5s.PNG'
import image2 from '../../assets/images/GestionProyectos.PNG'
import image3 from '../../assets/images/Produccion.PNG'
import image4 from '../../assets/images/CRM.PNG'
import image5 from '../../assets/images/Carga_Massiva.PNG'
import image6 from '../../assets/images/Recepcion_Mercancia.PNG'
import image7 from '../../assets/images/Guardado_Mercancías.PNG'
import image8 from '../../assets/images/Surtido_Kanban.PNG'
import image9 from '../../assets/images/Logistica_Inversa.PNG'


const cards = [
    {
        id: 1,
        translationKey: 'horizontalcard1',
        image: image1
    },
    {
        id: 2,
        translationKey: 'horizontalcard2',
        image: image2
    },
    {
        id: 3,
        translationKey: 'horizontalcard3',
        image: image3
    },
    {
        id: 4,
        translationKey: 'horizontalcard4',
        image: image4
    },
    {
        id: 5,
        translationKey: 'horizontalcard5',
        image: image5
    },
    {
        id: 6,
        translationKey: 'horizontalcard6',
        image: image6
    },
    {
        id: 7,
        translationKey: 'horizontalcard7',
        image: image7,
    },    
    {
        id: 8,
        translationKey: 'horizontalcard8',
        image: image8,
    },
    {
        id: 9,
        translationKey: 'horizontalcard9',
        image: image9,
    }
]

export default function Cardshorizontal() {
  
    const {t} = useTranslation();

    return (
    <div className="container cards d-flex justify-content-center align-items-center h-100">
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-12' key={card.id}>
                        <Cardhorizontal 
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

