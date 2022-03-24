import React from 'react';
import Status from './Status';
import Board from './Board';
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
            move: 'O',  //this is current move.
            ...checkGame(cells)
        };


    }

    handleCellClick = (id) => {
      
        if(this.state.over || this.state.cells[id])
            return; //don't play if game is over or current cell is occupied

        


        //get a duplicate copy of all cell values;
        let cells = [...this.state.cells];
        cells[id] = this.state.move;

        this.setState({ cells });  //same as {cells:cells} <--ES2015 Feature

        let move = this.state.move === 'O' ? 'X' : 'O';
        this.setState({ move });

        //check the game status now.

        let result= checkGame(cells);
        //update the state with new result
        this.setState({...result});

        
         

    }

    handleReset=()=>{
        let state= this.getInitialState();
        this.setState(state);
       
    }

   



    render = () => {
      

const disableButton = () =>{
  buttonRef.current.disabled = true; // this disables the button
 }
       
        return (
            <div className="game">
              
              <button className="play-button" onClick={this.handleEditClick.bind(this)}>Play</button>

{/* <form>

    <input disabled = {!this.state.disable} type="text"></input>

</form> */}

 <Status move={this.state.move} winner={this.state.winner} movesLeft={this.state.movesLeft} />

 <div disabled = {!this.state.disable}>

 <Board cells={this.state.cells} onCellClick={this.handleCellClick} />

 </div>

 



 {this.state.over ?

     <button

         onClick={this.handleReset}

         className="reset-button">Play Again</button> : null

 }


            
            </div>
        )
    };
}

export default Game;