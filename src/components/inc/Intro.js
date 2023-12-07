import React from 'react'
import introv from '../../assets/video/futuristic.mp4'

import { useTranslation } from 'react-i18next';

export default function Intro() {

  const [t] = useTranslation();

  return (
    <div className='newpage'>
      <div className='intro'>
        <div className="overlay"></div>
        <video src={introv} autoPlay loop muted></video>
        <div className='content'>
            <h1>{t("intro.body1")}</h1>
            <h3>{t("intro.body2")}</h3>

        </div>
      </div>
    </div>
  )
}
