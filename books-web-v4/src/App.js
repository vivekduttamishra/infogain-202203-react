

import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import BookManageScreen from './screens/BookManageScreen';
import BookListScreen from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookAddScreen from './screens/BookAddScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import UserRegistrationScreen from './screens/UserRegistrationScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserFavoriteScreen from './screens/UserFavoriteScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';


const App = () => {


    return (
        <div>
            <Router>
                <AppHeader title="Book's Web" />
                <div className='screen'>
                    <Routes>
                        <Route path="/book/list" element={<BookListScreen />} />
                        <Route path="/book/add" element={<BookAddScreen />} />
                        <Route path="/book/info/:isbn" element={<BookDetailsScreen />} />
                        <Route path="/user/login" element={<UserLoginScreen />} />
                        <Route path="/user/register" element={<UserRegistrationScreen />} />
                       
                        <Route path="/user/profile" element={<UserProfileScreen />} />
                        <Route path="/user/favorites" element={<UserFavoriteScreen />} />
                        
                       
                        <Route path="/notfound/:error/:info" element={<NotFoundScreen />} />
                        <Route path="/" element={<Navigate to="/book/list" />} />

                        <Route path="*" element={<NotFoundScreen />} />
                    </Routes>
                </div>
                <AppFooter />
            </Router>
        </div>
    );
};

export default App;