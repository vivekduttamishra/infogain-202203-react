
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Switch, Navigate } from 'react-router-dom';

import Home from './components/Home'
import BookManageScreen from './screens/BookManageScreen';
import BookListScreen from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookAddScreen from './screens/BookAddScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import UserRegistrationScreen from './screens/UserRegistrationScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import books from './data/books';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';



const App = () => {

    return (
        <div>

            <Router>
                <AppHeader title="Book's Web" />
                <div className='screen'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/book/list" element={<BookListScreen />} />
                        <Route path="/book/add" element={<BookAddScreen />} />
                        <Route path="/book/info/:isbn" element={<BookDetailsScreen data={books}/>} />
                        <Route path="/user/login" element={<UserLoginScreen />} />
                        <Route path="/user/register" element={<UserRegistrationScreen />} />

                        {/* <Route path="/" element={<Navigate to="/book/list" />} /> */}

                        <Route path="*" element={<NotFoundScreen />} />
                        <Route path="/book/info/:isbn" element={<NotFoundScreen />} />
                        
                    </Routes>
                </div>
                <AppFooter />
            </Router>

        </div>
    );
};

export default App;