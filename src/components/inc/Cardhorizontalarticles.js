import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Cardhorizontalarticles({date, title, imageSource, text, url}) {
  
    const [t] = useTranslation();

    return (
        <div>
            <div className="container card text-center bg-dark animate__animated animate__fadeInUp">
                <div className="row g-5 justify-content-evenly">
                    <div className="overflow col-lg-3">
                        <img 
                            src={imageSource} 
                            alt="" 
                            className="bg-image hover-overlay ripple shadow-1-strong rounded" 
                            data-mdb-ripple-color="light" 
                            style={{ 
                                maxWidth: "100%",
                                height: "auto",   // keeps proportions
                                maxHeight: "12rem",
                                objectFit: "contain" // fits inside without cutting
                            }}
                        />
                    </div>
                    <div className='col-lg-9 card-body text-light text-start'>
                        <h4 className="card-title">{date} - {title}</h4>
                        <p className='card-text text-secondary' style={{ height: '6rem' }}>
                            {
                                text ? text : 'Texto pendiente'
                            }
                            <Link to={url} className="btn btn-link" style={{ color: "white" }}>{t("cards.link2")}</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

Cardhorizontalarticles.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}
