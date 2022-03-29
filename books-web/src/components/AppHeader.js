import React from 'react';
import {Link} from 'react-router-dom';
import BookService from '../services/BookService'
import UserService from '../services/UserService';

const AppHeader=({title})=>{
    //TODO: Initialize Here
    
    let logedinuser = JSON.parse(localStorage.getItem('logedinuser'))

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">{title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/book/list" >Books <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/book/add" >Add Book</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/author/add">Authors</Link>
                    </li>
                    
                    
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav">
                <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {logedinuser ? logedinuser.email:'Members'}
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {!logedinuser && <><Link className="dropdown-item" to="/user/login">Login</Link>
                            <Link className="dropdown-item" to="/user/register">Register</Link></>}
                            <div className="dropdown-divider"></div>
                            {logedinuser && <><Link className='dropdown-item' to="#">Profile</Link>
                            <Link className='dropdown-item' to="#">Favourites</Link>
                            <Link className="dropdown-item" to="#" onClick={UserService.userLogout}>Logout</Link></>}
                        </div>
                    </li>
                </ul>
               
            </div>
        </nav>
    );
}

export default AppHeader;