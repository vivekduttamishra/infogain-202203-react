import React from 'react';
import Status from './Status';
import Board from './Board';
import If from './If';
import {checkGame} from '../services/TicTacToe';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }


    getInitialState = () => {

        let cells= [     //initally all cells should be empty
            null, null, null,
            null, null, null,
            null, null, null
        ];
        return {
            cells,
            move: null, //no one's move yet
            ...checkGame(cells)
        };


    }

    handleCellClick = (id) => {
      
        if(this.state.move===null || this.state.over || this.state.cells[id])
            return; //don't play if game is over or current cell is occupied

        //get a duplicate copy of all cell values;
        let cells = [...this.state.cells];
        cells[id] = this.state.move;

        this.setState({ cells });  //same as {cells:cells} <--ES2015 Feature

        let move = this.state.move === 'O' ? 'X' : 'O';
        this.setState({ move });

        //check the game status now.

        let result= checkGame(cells);
        if(result.over)
            this.setState({move:null});

        //update the state with new result
        this.setState({...result});



    }

    handleReset=()=>{
        let state= this.getInitialState();
        this.setState(state);
    }

    handleStart=()=>{
        let state= this.getInitialState();
        this.setState(state);
        this.setState({move:"O"});
    }


    render = () => {
        return (
            <div className="game">
                <Status move={this.state.move} winner={this.state.winner} movesLeft={this.state.movesLeft} />
                <Board cells={this.state.cells} onCellClick={this.handleCellClick} />
                

                <If condition={this.state.move===null}>
                    <button 
                            onClick={this.handleStart}
                            className="start-button">Start
                    </button>
                </If>
               
            </div>
        )
    };
}

export default Game;