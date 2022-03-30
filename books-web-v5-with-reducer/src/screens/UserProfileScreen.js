import React from 'react';
import { useUserContext } from '../store/UserStore';
import {Navigate} from 'react-router-dom';

const UserProfileScreen=({})=>{
    //TODO: Initialize Here
    
    const {user} = useUserContext();
    if(!user) 
        return <Navigate to="/user/login" />

    return (
        <div className='UserProfileScreen'>
            <h1>Welcome {user.name}</h1>

            Your email address is : {user.email}
        </div>
    );
}

export default UserProfileScreen;