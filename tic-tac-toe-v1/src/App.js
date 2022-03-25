import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Clock from './components/Clock';
import ScoreBoard from './components/ScoreBoard';

const App =  ()=>{
    let properties = {
        xWins: 0,
        yWins: 0,
        draw: 0,
        total: 0
    }

    return (
        properties,
        <React.Fragment>
        <div className="app">
            <Header/>
            <Clock/>
            <Game/>
        </div>
        <div className="score">
                <ScoreBoard/>
            </div>
        </React.Fragment>
    );

};

export default App;

