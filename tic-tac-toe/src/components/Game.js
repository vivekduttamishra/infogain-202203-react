
import React from 'react';
import Status from './Status';
import Board from './Board';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: [     
                null, null, null,
                null, null, null,
                null, null, null
            ],
            move: 'O' 
        }
    }

    handleCellClick = (id) => {
        console.log(`cell ${id} clicked`);

        let cells = [...this.state.cells];

        if (cells[id])   
            return; 

        //add current move value to cell
        cells[id] = this.state.move;

        this.setState({ cells });  

        //update the move value
        let move = this.state.move === 'O' ? 'X' : 'O';

        //update the state again
        this.setState({ move });
    }

    handleReset = () => {
        const newBoxData = [
            null, null, null,
            null, null, null,
            null, null, null
        ]
        var data = newBoxData;
        this.setState({
            cells: data
        })
        console.log("Reset", this.state.cells)
    }

    render = () => {
        return (
            <div className="game">
                <Status status={this.state.move} />
                <Board value={this.state.cells} onCellClick={this.handleCellClick} />
                <button className="reset-button" onClick={this.handleReset}>Reset</button>
            </div>
        )
    };
}

export default Game;