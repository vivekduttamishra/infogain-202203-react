import React from 'react';
// import useForm from '../utils/useForm';
// import InputField from '../components/Input';

import {useForm, InputField,AsyncForm} from '../components/Input';

import userService from '../services/UserService';


const UserRegistrationScreen=({})=>{
    //TODO: Initialize Here

  

    const [user, updateUser] = useForm({
        name:'',
        email:'',
        password:''
    });

    const registerUser =async ()=>{
        try{
        await userService.register(user);
        }catch(e){
            console.log(e);
            throw e;
        }
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