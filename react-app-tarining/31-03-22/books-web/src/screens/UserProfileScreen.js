import React from 'react';

import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';

const UserProfileScreen=({user})=>{
    
    if(!user) 
        return <Navigate to="/user/login" />

    return (
        <div className='UserProfileScreen'>
            <h1>Welcome {user.name}</h1>

            Your email address is : {user.email}
        </div>
    );
}

const mapReduxStateToProps= reduxStore=>{

    return {
        user:reduxStore.user
    };
}



export default connect(mapReduxStateToProps)(UserProfileScreen);