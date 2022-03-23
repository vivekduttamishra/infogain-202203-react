import React from 'react';
import Status from './Status';
import Board from './Board';

const Game=()=>{
    return (
        <div className="game">
            <Status/>
            <Board/>
            <button className="reset-button">Reset</button>
        </div>
    )
};

export default Game;