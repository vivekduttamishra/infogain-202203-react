import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
// import WinnerBoard from './components/WinnerBoard';
import Clock from './components/Clock';
const App =  ()=>{

    return (
        <div className="app">
            <Header/>
            <Clock/>
            <Game/>
            {/* <WinnerBoard /> */}

        </div>
    );
};

export default App;

