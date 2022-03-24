import React from 'react';
import Status from './Status';
import Board from './Board';
import WinnerBoard from './WinnerBoard';
import { checkGame } from '../services/TicTacToe';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState()
               
    }


    getInitialState = () => {
        let cells = [     //initally all cells should be empty
            null, null, null,
            null, null, null,
            null, null, null
        ];
        
        return {
            cells,
            move: 'O', //this is current move.
            Owin: 0,
            Xwin: 0,
            draw: 0,
            disable:false,
            ...checkGame(cells)
        };
    }


    handleCellClick = (id) => {

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

    handleReset = () => {
        let state = this.getInitialState();
        this.setState(state);
    }

    handleWinClick = () => {
        var win = this.state.winner;
        if(win == 'O'){
            var Owin1 = this.state.Owin;
            var Owin = Owin1 + 1
            console.log("Owin Add", Owin)
            this.setState({Owin});
        } if (win == 'X') {
            var Xwin1 = this.state.Xwin;
            var Xwin = Xwin1 + 1
            console.log("Xwin Add", Xwin)
            this.setState({Xwin});
        } if (win === null) {
            var draw1 = this.state.draw;
            var draw = draw1 + 1;
            console.log("Draw Add", draw)
            this.setState({draw});
        }
    }


    render = () => {
        return (
            <div className="game">
                
                <Status move={this.state.move} winner={this.state.winner} movesLeft={this.state.movesLeft} />
               
                <Board cells={this.state.cells} onCellClick={this.handleCellClick} />
               
                {this.state.over ?
                    <button
                        onClick={this.handleReset}
                        className="reset-button">Play Again</button> : null
                }
                <button className="Check-board" onClick={this.handleWinClick}>Show Match Stats</button>
                <WinnerBoard Owin={this.state.Owin} Xwin={this.state.Xwin} draw={this.state.draw}/>
            </div>
        )
    };
}

export default Game;