import React, { useState } from 'react';
import useForm from '../utils/useForm';
import InputField from '../components/InputField';
import userRegisterService from '../services/UserRegisterService';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const UserLoginScreen = ({ }) => {

    var [error, setError] = React.useState(null);
    var [loading, setLoading] = React.useState(false);
    var navigate = useNavigate();

    const [user, updateUser] = useForm({
        email: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setError(null);
            setLoading(true);
            await userRegisterService.getUser(user);
            return navigate("/book/list");
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
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
                        <InputField name="password" value={user.password} type="password" onChange={updateUser} />
                        <button type="submit" className='btn btn-primary'>Login</button>
                        <Loader size={40} condition={loading} />
                        <span className='text text-danger'> {error}</span>
                    </form>
                </div>
            </div>

        </>
    );
}

export default UserLoginScreen;