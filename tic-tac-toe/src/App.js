import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Clock from './components/Clock';
import ScoreBoard from './components/ScoreBoard';
import TimeOut from './components/TimeOut'
const App =  ()=>{

    return (
        <div className="app">
            <Header/>
            <Clock/>
            <Game/>
            <div className='timer'>
                <TimeOut/>
            </div>
            
          
            <div className="scoreboard">
                <ScoreBoard/>
            </div>
        </div>
        
    );
};

export default App;

