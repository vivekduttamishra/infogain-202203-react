import React from 'react';
import useForm from '../utils/useForm';
import InputField from '../components/InputField';
import userService from '../services/UserService';
import {useNavigate} from 'react-router-dom';
import Loader from '../components/Loader';

const UserRegistrationScreen=({})=>{
    //TODO: Initialize Here

    const [error, setError]=React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const navigate=useNavigate();

    const [user, updateUser, registerUser] = useForm({
        name:'',
        email:'',
        password:''
    },async user=>{
        console.log('user',user);
        try{
            setError(null);
            setLoading(true);
            await userService.register(user);
            return navigate('/'); //go back to home page after registration
        }catch(error){
            setError(error.message);
            setLoading(false);
        }
        
    });

    



    return (
        <>
            <h1>UserRegistrationScreen</h1>

            <form onSubmit={registerUser}>
                <InputField name="name" value={user.name} onChange={updateUser} />
                <InputField name="email" value={user.name} onChange={updateUser} />
                <InputField name="password" type="password" value={user.name} onChange={updateUser} />
                <button type="submit" className="btn btn-primary">Register</button>
                <Loader condition={loading} size={25} />
                <span className="text text-danger"> {error}</span>
            </form>
        </>
    );
}

export default UserRegistrationScreen;