import React from 'react';
import Cards from '../../inc/Cards';

import { useTranslation } from 'react-i18next';

export default function Ventajas() {

    const [t] = useTranslation();

    return (
        <div>
            <section className='section border-top'>
                <div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                {t("ventajas.title")}
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className='Bkground'>
                            <Cards />
                        </div>
                        <div className='row'></div>
                    </div>
                </div>
            </section>

        </div>
    )
}
