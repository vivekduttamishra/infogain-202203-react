import React,{useState} from 'react';

const InputField = ({name, upperCasedLabel=true, value,type="text", label=name, placeholder=label,onChange }) => {
    //TODO: Initialize Here

    var [_value,setValue]=useState(value);

    if(upperCasedLabel)
        label=label.toUpperCase();

    const handleChange=(e)=>{
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

export default InputField;