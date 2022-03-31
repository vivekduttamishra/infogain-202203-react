import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import store from './store/Store';  //this is my redux store

import { Provider } from 'react-redux'; //acts like Context.Provider



ReactDOM.render(
    <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
    </React.StrictMode>,
    document.querySelector("#root"));

