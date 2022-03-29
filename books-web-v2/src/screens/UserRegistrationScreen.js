import React,{useState} from 'react';

const UserRegistrationScreen=({})=>{
    //TODO: Initialize Here
    const [data,setData]=useState({
        username:"",
        email:'',
        password:"",
        confirmpassword:''
    })
    const {username,email,password,confirmpassword} = data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    return (
        <div className='UserRegistrationScreen'>
           <form>
                    <label for='text'>Username</label>
                    <input type='text' name='username' value={username} onChange={changeHandler} /><br/>
                    <label for='email'>Email</label>
                    <input type='text' name='username' value={email} onChange={changeHandler}/><br/>
                    <label for='text'>Password</label>
                    <input type='password' name='password' value={password} onChange={changeHandler} /><br/>
                    <label for='text'>Confirm Password</label>
                    <input type='password' name='password' value={confirmpassword}  onChange={changeHandler}/><br/>
                    <input type='submit' name="submit"/>
           </form>
        </div>
    );
}

export default UserRegistrationScreen;