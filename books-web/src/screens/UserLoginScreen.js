import React from 'react';

const UserLoginScreen = ({ }) => {
    //TODO: Initialize Here


    return (
        <div className='UserRegistrationScreen'>
            <div className='UserLoginScreen'>
                <h1 className='login-header'>User Login </h1>
                <div className='login-img'>
                    <img src="https://ca-booksapi.herokuapp.com/images/coverpage02.jpg" alt="login-image" className='login-round' />
                </div>
                <div className="login-form">
                    <form className="form-signin">
                        <div class="form-group row">
                            <div className="col-sm-10">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-sm-10">
                                <div class="input-group-prepend">
                                    <div className="input-group-text">🔑</div>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-login-primary">➡Login</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default UserLoginScreen;