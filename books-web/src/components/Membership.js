import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
//import userService from '../services/UserService';
import {logout,checkLogin} from '../store/UserActions';

import {useSelector,useDispatch} from 'react-redux';


const LoggedInUserMenu = ({user}) => {

    
    const dispatch=useDispatch();

    const handleLogout=()=>{
        logout()(dispatch);
    }
    

    return (<>
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {user.name}
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link data-toggle="collapse" data-target="#navbarSupportedContent" className="dropdown-item" to="/user/Profile">Profile</Link>
            <Link data-toggle="collapse" data-target="#navbarSupportedContent" className="dropdown-item" to="/user/favorites">Favorites</Link>
            <div className="dropdown-divider"></div>
            <button onClick={handleLogout} data-toggle="collapse" data-target="#navbarSupportedContent" className="dropdown-item" to="#">Logout</button>
        </div>

    </>);
}

const GuestMenu = () => {

    return (<>
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Guest
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link data-toggle="collapse" data-target="#navbarSupportedContent" className="dropdown-item" to="/user/login">Login</Link>
            <Link data-toggle="collapse" data-target="#navbarSupportedContent" className="dropdown-item" to="/user/register">Register</Link>
           
        </div>

    </>)
}

const Membership = ({ }) => {
    //TODO: Initialize Here
   
  

   const user = useSelector(s=>s.user);
   

   const dispatch=useDispatch();

    useEffect(()=>{

       checkLogin()(dispatch);


    },[]);
   


    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown" data-toggle="collapse" data-target="#navbarSupportedContent">
                {user ? <LoggedInUserMenu user={user} />: <GuestMenu/> }
            </li>
        </ul>
    );
}

export default Membership;