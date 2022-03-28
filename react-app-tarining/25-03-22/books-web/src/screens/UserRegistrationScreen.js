import React from 'react';

const UserRegistrationScreen = ({ }) => {
    //TODO: Initialize Here


    return (
        <div className='UserRegistrationScreen'>

            <div className='UserLoginScreen'>
                <h1 className='login-header'>User Registration </h1>
                <div className='login-img'>
                    <img src="https://ca-booksapi.herokuapp.com/images/coverpage02.jpg" alt="login-image" className='login-round' />
                </div>
                <div className="regisration-form">
                    <form className="form-signup">
                        <div class="form-group row">
                        <div className="col-sm-10">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                </div>
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

                            <div className="col-sm-10">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">🔑</div>
                                    <input type="password" className="form-control" placeholder="confirm password" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-reg-primary">👨‍🏫Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserRegistrationScreen;