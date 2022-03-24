import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Clock from './components/Clock'
import Scoreboard from './components/Scoreboard'

const App =  ()=>{

    return (
        <div className="app">
            <Header/>
            <Game/>
            <Clock/>
          <div className='Scoreboard'>
              <Scoreboard/>
          </div>
        </div>
        
    );
};

export default App;

