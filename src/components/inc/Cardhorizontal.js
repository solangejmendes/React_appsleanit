import React from 'react'
import PropTypes from 'prop-types'

export default function Cardhorizontal({title, imageSource, text, url}) {
  return (
    <div>
        <div className="container card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="row g-5 justify-content-evenly">
                <div className="overflow col-lg-3">
                    <img src={imageSource} alt="" className="bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light" style={{ height: '12rem'}}/>
                </div>
                <div className='col-lg-9 card-body text-light'>
                    <h4 className="card-title">{title}</h4>
                    <p className='card-text text-secondary' style={{ height: '6rem' }}>
                        {
                            text ? text : 'Texto pendiente'
                        }
                    </p>
                    <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank" rel="noreferrer">
                        <small className="text-medium-emphasis">Ver video de la aplicación</small>
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

Cardhorizontal.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

