import React from 'react';
import { Link } from 'react-router-dom';

const LoggedInUserMenu = ({user}) => {

    return (<>
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {user.name}
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link data-toggle="collapse" data-target="#navbarSupportedContent" className="dropdown-item" to="/user/Profile">Profile</Link>
            <Link data-toggle="collapse" data-target="#navbarSupportedContent" className="dropdown-item" to="/user/favorites">Favorites</Link>
            <div className="dropdown-divider"></div>
            <Link data-toggle="collapse" data-target="#navbarSupportedContent" className="dropdown-item" to="#">Logout</Link>
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
    var str=localStorage.getItem("currentUser");
    var user= str ? JSON.parse(str):null;

    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown" data-toggle="collapse" data-target="#navbarSupportedContent">
                {user ? <LoggedInUserMenu user={user} />: <GuestMenu/> }
            </li>
        </ul>
    );
}

export default Membership;