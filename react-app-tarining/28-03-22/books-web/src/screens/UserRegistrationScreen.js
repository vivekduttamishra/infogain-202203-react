import React from 'react';
import useForm from '../utils/useForm';
import InputField from '../components/InputField';
import userRegisterService from '../services/UserRegisterService';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';


const UserRegistrationScreen = ({ }) => {
    var [error, setError] = React.useState(null);
    var [loading, setLoading] = React.useState(false);
    var navigate = useNavigate();

    const [user, updateUser, registerUser] = useForm({
        name: '',
        email: '',
        password: ''
    }, async e => {
        //console.log('book',book);
        try {
            setError(null);
            setLoading(true);
            await userRegisterService.addUser(user);
            return navigate("/user/login"); //go to the book list when successful
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);

    });





    return (
        <>
            <h1>UserRegistrationScreen</h1>

            <form onSubmit={registerUser}>
                <InputField name="name" value={user.name} onChange={updateUser} />
                <InputField name="email" value={user.email} onChange={updateUser} />
                <InputField name="password" type="password" value={user.password} onChange={updateUser} />
                <button type="submit" className="btn btn-primary">Register</button>
                <Loader size={40} condition={loading} />
                <span className='text text-danger'> {error}</span>
            </form>
        </>
    );
}

export default UserRegistrationScreen;