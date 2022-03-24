import React from 'react';
import Status from './Status';
import Board from './Board';
import { checkGame } from '../services/TicTacToe';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.playClicked = false;
        this.state = this.getInitialState();
    }


    getInitialState = () => {

        let cells = [     //initally all cells should be empty
            null, null, null,
            null, null, null,
            null, null, null
        ];
        return {
            cells,
            move: 'O',  //this is current move.
            ...checkGame(cells)
        };


    }

    handleCellClick = (id) => {

        if (!this.playClicked) {
            return;
        }

        if (this.state.over || this.state.cells[id])
            return; //don't play if game is over or current cell is occupied




        //get a duplicate copy of all cell values;
        let cells = [...this.state.cells];
        cells[id] = this.state.move;

        this.setState({ cells });  //same as {cells:cells} <--ES2015 Feature

        let move = this.state.move === 'O' ? 'X' : 'O';
        this.setState({ move });

        //check the game status now.

        let result = checkGame(cells);
        //update the state with new result
        this.setState({ ...result });
    }

    handlePlay = () => {
        this.playClicked = true;
    }
    handleReset = () => {
        let state = this.getInitialState();
        this.setState(state);
    }



    render = () => {
        return (
            <div className="game">
                <Status move={this.state.move} winner={this.state.winner} movesLeft={this.state.movesLeft} />
                <Board cells={this.state.cells} onCellClick={this.handleCellClick} />
                <button
                    onClick={this.handlePlay} hidden={this.playClicked}
                    className="reset-button">Play</button>
                <button
                    onClick={this.handleReset} hidden={!this.state.winner}
                    className="reset-button">Play Again</button>
            </div>
        )
    };
}

export default Game;