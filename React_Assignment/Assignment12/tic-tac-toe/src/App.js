import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Clock from './components/Clock';
import ScoreBoard from './components/ScoreBoard';
import Play from './Play';
const App =  ()=>{

    return (
        <div className="app">
            <Header/>
            <Clock/>
            <Play />
            <Game/>
            <ScoreBoard/>
        </div>
    );
};

export default App;

