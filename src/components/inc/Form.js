import React from 'react';
import { send } from 'emailjs-com';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useTranslation } from 'react-i18next';


export default function Form() {

    const navigate = useNavigate();
    const [t] = useTranslation();

    /* --- SET INITIAL DATA FIELDS --- */
    const [toSend, setToSend] = useState({
        from_name:'',
        from_phone:'',
        from_email:'',
        from_message:'',
        reply_to:'',
        to_name:'',
    });

    /* --- VALIDATE FORM FIELDS --- */
    const validationschema = Yup.object().shape({
        from_name: Yup.string().required('{t("form.valNombre")}'),
        from_phone: Yup.number().min(8).positive().integer().required('{t("form.valPhone")}'),
        from_email: Yup.string().email().required('{t("form.valEmail")}'),
        from_message: Yup.string().required('{t("form.valMessage")}'),
    });

    const {register,formState: { errors }} = useForm({
        resolver:yupResolver(validationschema),
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value});
    };

    const submitForm = (e) => {
        e.preventDefault();
        /* --- DISPLAY VALIDATION ERRORS --- */
        console.log(e);
        /* --- METHOD TO SEND THE EMAIL --- */
        send(
            'service_hvb2eaq',
            'template_e7tlcmd',
            toSend,
            'YVUu0maHv4Z6qOyhQ'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                navigate('/gracias');
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };




    return (
        <div>

            <form 
                validationschema={validationschema}
                onSubmit={submitForm} 
                data-form-title="CONTACT FORM"
            >
                <div className="form-group">
                    <label className="mb-1">{t("form.nombre")}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="from_name" 
                        required
                        placeholder={t("form.placeNombre")}
                        data-form-field="Name" 
                        {...register("from_name")} 
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <p>{errors.from_name?.message}</p>
                </div>
                <div className="form-group">
                    <label className="mb-1">{t("form.phone")}</label>
                    <input 
                        type="tel" 
                        className="form-control phone" 
                        name="from_phone" 
                        required                        
                        placeholder={t("form.placePhone")}
                        data-form-field="Phone" 
                        {...register("from_phone")}
                        value={toSend.from_phone}
                        onChange={handleChange}
                    />
                    <p>{errors.from_phone?.message}</p>
                </div>
                <div className="form-group">
                    <label className="mb-1">{t("form.email")}</label>
                    <input 
                        type="email" 
                        className="form-control email" 
                        name="from_email" 
                        required
                        placeholder={t("form.placeEmail")}
                        data-form-field="Email" 
                        {...register("from_email")}
                        value={toSend.from_email}
                        onChange={handleChange}
                    />
                    <p>{errors.from_email?.message}</p>
                </div>
                <div className="form-group">
                    <label className="mb-1">{t("form.message")}</label>
                    <textarea 
                        className="form-control message" 
                        name="from_message" 
                        required
                        placeholder={t("form.placeMessage")} 
                        rows="7" 
                        data-form-field="Message"
                        {...register("from_message")}
                        value={toSend.from_message}
                        onChange={handleChange}
                    >
                    </textarea>
                    <p>{errors.from_message?.message}</p>
                </div>
                <div className="form-group py-3">
                    <button type="submit" className="btn btn-primary shadow w-100">
                        {t("form.btnSend")}
                    </button>
                </div>
            </form>
        </div>
    )
}
