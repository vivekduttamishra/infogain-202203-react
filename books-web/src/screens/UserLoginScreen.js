import React,{useState} from 'react';

const UserLoginScreen=({})=>{
    //TODO: Initialize Here
    const [data,setData]=useState({
        username:"",
        password:""
    })
    const {username,password} = data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=e=>{
        e.preventDefault()
        console.log(data)
    }
    return (
        <div className='UserLoginScreen'>
            <center>
                <form onSubmit={submitHandler}>
                    <label for='text'>Username</label>
                    <input type='text' name='username' value={username} onChange={changeHandler}/><br/>
                    <label for='text'>Password</label>
                    <input type='password' name='password' value={password} onChange={changeHandler}/><br/>
                    <input type='submit' name="submit"/>
                </form>
            </center>
        </div>
    );
}

export default UserLoginScreen;