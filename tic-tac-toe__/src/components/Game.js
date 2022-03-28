import React from 'react';
import { ReactDOM } from 'react';
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
        return alert("Press the start Button"); //don't play if game is over or current cell is occupied
        //get a duplicate copy of all cell values;
        let cells = [...this.state.cells];
        cells[id] = this.state.next;
        // this.setState({ cells });  //same as {cells:cells} <--ES2015 Feature
        
        // this.setState({ move });
        //check the game status now.
        const newResult= checkGame(cells);
        this.setState({result:newResult});
        if(newResult.over){
            this.props.onGameOver(newResult);
        }
        
        const move={player:this.state.next, position:id+1};
        const moves=[...this.state.moves,move];
        this.setState({moves});
        let next = this.state.next === 'O' ? 'X' : 'O';
            // this.setState({move:null});
        //update the state with new result
        // this.setState({...result});
        this.setState({cells,next});
    }
    onGameOver=(result)=>{

        let score={...this.state.score};

        score.games++;
        if(result.winner){
            score[result.winner]++; // score['O']++  or score['X']++
        } else
            score.draw++;

        this.setState({score});


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