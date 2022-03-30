import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

export const InputField = ({ name, upperCasedLabel = true, value, type = "text", label = name, placeholder = label, onChange }) => {
    //TODO: Initialize Here

    var [_value, setValue] = useState(value);

    if (upperCasedLabel)
        label = label.toUpperCase();

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.name, e.target.value);
    }

    return (
        <div className='input-field'>
            <label htmlFor={name}>{label}</label>
            <input type={type} className='form-control'
                id={name} name={name} placeholder={placeholder}
                value={_value} onChange={handleChange}
            />
        </div>
    );
}


export const AsyncForm = ({ actionName = "submit", action, successAction, successRedirectUrl = "/", children }) => {
    
    var [loader, setLoader] = useState(false);
    var [error, setError] = useState(null);
    var navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setLoader(true);
            setError(null);
            var result = await action();
            if (successAction)
                return await successAction(result);
            if (successRedirectUrl)
                return navigate(successRedirectUrl);
        } catch (error) {
            setError(error.message);

        }
        setLoader(false);

    };

    return (
     
        <form onSubmit={handleSubmit} >

            {children}
            <button className='btn btn-primary'>{actionName}</button>
            <Loader condition={loader} />
            <span className='text text-danger'> {error}</span>
        </form>
       
    );

}

export const useForm = (model) => {

    var [_model, setModel] = useState(model);

    const handleFieldChange = (name, value) => {
        let m = { ..._model };
        m[name] = value;
        setModel(m);
    }


    return [_model, handleFieldChange];
};



