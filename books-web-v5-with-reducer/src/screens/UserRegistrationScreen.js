import React from 'react';
// import useForm from '../utils/useForm';
// import InputField from '../components/Input';

import {useForm, InputField,AsyncForm} from '../components/Input';


import {useUserContext} from '../store/UserStore';


const UserRegistrationScreen=({})=>{
    //TODO: Initialize Here

    const {register} =useUserContext();

    const [user, updateUser] = useForm({
        name:'',
        email:'',
        password:''
    });

    const registerUser =async ()=>{
        await register(user);
    }

    



    return (
        <>
            <h1>UserRegistrationScreen</h1>

            <AsyncForm action={registerUser}>
                <InputField name="name" value={user.name} onChange={updateUser} />
                <InputField name="email" value={user.email} onChange={updateUser} />
                <InputField name="password" type="password" value={user.password} onChange={updateUser} />
            </AsyncForm>
        </>
    );
}

export default UserRegistrationScreen;