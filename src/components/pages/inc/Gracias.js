import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Gracias() {

    const {t} = useTranslation();

    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Gracias</h3>
                            <div className="underline mx-auto"></div>
                            <p>{t("gracias.body")}</p>
                            <Link to="/">
                                    <button className="btn btn-primary shadow">
                                        {t("gracias.button")}
                                    </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
    )
}
