import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Clock from './components/Clock';
import Score from './components/Score';
import Timer from './components/Timer';
// function component
const App =  ()=>{

    return (
        <div>
        <div className="app">
            <Header/>
            <Clock/>
            <Game/>
            
           
        </div>
        <div class="score-timer">
        <Score/>
        <Timer/>
        </div>
        </div>
    );
};

export default App;


