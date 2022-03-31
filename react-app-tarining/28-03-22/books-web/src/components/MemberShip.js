import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function MemberShip({ user }) {
    // const uName = sessionStorage.getItem("users");
    // const [login, setlogin] = useState(false);

    // useEffect(()=>{
    //     setlogin(true);
    // },[])

    // const loggedin = JSON.parse(localStorage.getItem('users'));

    return (
        <div>
            {
                user ?
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {user.name}
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/user/login">Login</Link>
                                <Link className="dropdown-item" to="/user/register">Register</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Logout</Link>
                            </div>
                        </li>
                    </ul>
                    :
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Guest
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/user/login">Login</Link>
                                <Link className="dropdown-item" to="/user/register">Register</Link>
                            </div>
                        </li>
                    </ul>
            }

        </div>
    )
}

export default MemberShip