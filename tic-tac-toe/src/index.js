import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// rendering our whole app which contains small components like game,board etc
ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
        
        , 
        
        document.querySelector("#root"));