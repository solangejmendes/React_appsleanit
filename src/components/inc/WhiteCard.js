import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';


export default function WhiteCard({title, imageSource, text, url}) {

    const [t] = useTranslation();

    return (
        <div>  
            <div className="col-md-12">
                <div className="card shadow animate__animated animate__fadeInUp h-100">
                    <img src={imageSource} className="w-100 border-bottom" alt="services" />
                    <div className="card-body">
                        <h6>{title}</h6>
                        <div className="underline"></div>
                        <p className='card-text text-secondary' style={{ height: '10rem' }}>
                            {
                                text ? text : 'Texto pendiente'
                            }
                        </p>
                        <Link to={url} className="btn btn-link">{t("cards.link")}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

WhiteCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}