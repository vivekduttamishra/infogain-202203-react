import React from 'react';
import useForm from '../utils/useForm';
import InputField from '../components/InputField';

const UserLoginScreen=({})=>{
    //TODO: Initialize Here
    
    const [user, updateUser] = useForm({
        email:'',
        password:''
    });

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log('user',user);        
    }


    return (
        <>
            <h1 className='screen-title'>User Login Screen</h1>

            <div className='row'>
                <div className='col-6'>

                </div>
                <div className='col-6'>
                    <form onSubmit={handleLogin}>
                        <InputField name="email" value={user.email} onChange={updateUser} />
                        <InputField name="password" value={user.password} type="password" onChange={updateUser}/>
                        <button type="submit" className='btn btn-primary'>Login</button>
                    </form>
                </div>
            </div>

        </>
    );
}

export default UserLoginScreen;