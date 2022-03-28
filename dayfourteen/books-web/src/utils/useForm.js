import {useState} from 'react';


const useForm=(model,formSubmitHandler)=>{

    var [_model ,setModel ]= useState(model);

    const handleFieldChange = (name, value)=>{
        let m ={..._model};
        m[name]=value;
        setModel(m);
    }

    const handleSubmit =   e  =>{
        e.preventDefault();
        formSubmitHandler(_model);
    };

    return [_model, handleFieldChange, handleSubmit];

};


export default useForm;