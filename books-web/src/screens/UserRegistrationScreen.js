import React from 'react';
import useForm from '../utils/useForm';
import InputField from '../components/InputField';
import BookService from '../services/BookService';
import UserService from '../services/UserService';

const UserRegistrationScreen=({})=>{
    //TODO: Initialize Here

    const [user, updateUser, registerUser] = useForm({
        name:'',
        email:'',
        password:''
    }, user=>{
        console.log('user',user);
        UserService.userRegistration(user);
        
    });

    



    return (
        <>
            <h1>UserRegistrationScreen</h1>

            <form onSubmit={registerUser}>
                <InputField name="name" value={user.name} onChange={updateUser} />
                <InputField name="email" value={user.name} onChange={updateUser} />
                <InputField name="password" type="password" value={user.name} onChange={updateUser} />
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    );
}

export default UserRegistrationScreen;