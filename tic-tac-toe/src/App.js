import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Clock from './components/Clock';
const App =  ()=>{

    return (
        <div className="app">
            <Header/>
            <Clock/>
            <Game/>
        </div>
    );
};

export default App;

