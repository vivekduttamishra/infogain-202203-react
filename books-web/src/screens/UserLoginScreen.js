import React from 'react';
import {useForm, InputField,AsyncForm} from '../components/Input';
//import userService from '../services/UserService';
import {login} from '../store/UserActions';
import { useDispatch} from 'react-redux';

const UserLoginScreen=({})=>{
    //TODO: Initialize Here
    
    const [user, updateUser] = useForm({
        email:'vivek@email.com',
        password:'p@ss#1'
    });

    const dispatch=useDispatch();

    const loginUser= async ()=>{
       await login(user.email,user.password)(dispatch);
    }


    return (
        <>
            <h1 className='screen-title'>User Login Screen</h1>

            <div className='row'>
                <div className='col-6'>

                </div>
                <div className='col-6'>
                    <AsyncForm action={loginUser} actionName="Sign In" successRedirectUrl='/user/profile'>
                        <InputField name="email" value={user.email} onChange={updateUser} />
                        <InputField name="password" value={user.password} type="password" onChange={updateUser}/>                        
                    </AsyncForm>
                </div>
            </div>

        </>
    );
}

export default UserLoginScreen;