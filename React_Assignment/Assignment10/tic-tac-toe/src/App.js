import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Clock from './components/Clock';
import ScoreBoard from './components/ScoreBoard';


const App =  ()=>{

    return (
        // <div className="app">
        //     <Header/>
        //     <Clock/>
        //     <Game/>
        // </div>
              <div className="row pt">
              <div className="col col-5">
              <div className="app">
              <Header/>
              <Clock />
              <Game/>
          </div>
              </div>
              <div className="col col-7">
                  <ScoreBoard />
              </div>
  
          </div>
    );
};

export default App;

