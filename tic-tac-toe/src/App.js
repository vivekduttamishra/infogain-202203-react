import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Clock from './components/Clock';
import Score from './components/Score';
import Timer from './components/Timer';
const App =  ()=>{

    return (
        <div className="app">
            <Header/>
            <Clock/>
            <Game/>
            <Score/>
            <Timer/>
        </div>
    );
};

export default App;


