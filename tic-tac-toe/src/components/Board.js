import React from 'react';
import Cell from './Cell';

class Board extends React.Component {

    constructor(props){
        super(props);

        this.state={

            cells:[     //initally all cells should be empty
                        null, null, null,
                        null, null, null, 
                        null, null, null                       
                  ], 
            move:'O'  //this is current move.

        }
    }

    handleCellClick=(id)=>{
        console.log(`cell ${id} clicked`);
        
        //get a duplicate copy of all cell values;
        let cells= [...this.state.cells];

        if(cells[id])   //if current cell as some value  (O or X)
            return ; //do nothing and return. don't allow cell to be clicked again

        //add current move value to cell

        cells[id] = this.state.move;  

        //update the state
        this.setState({cells});  //same as {cells:cells} <--ES2015 Feature

        //update the move value

        let move = this.state.move==='O'?'X':'O';

        //update the state again

        this.setState({move});




    }

    render=()=>{
        return (
            <div className='board'>
    
                <Cell value={this.state.cells[0]} id={0} onCellClick={this.handleCellClick}/>
                <Cell value={this.state.cells[1]} id={1} onCellClick={this.handleCellClick}/>
                <Cell value={this.state.cells[2]} id={2} onCellClick={this.handleCellClick}/>
                
                <Cell value={this.state.cells[3]} id={3} onCellClick={this.handleCellClick}/>
                <Cell value={this.state.cells[4]} id={4} onCellClick={this.handleCellClick}/>
                <Cell value={this.state.cells[5]} id={5} onCellClick={this.handleCellClick}/>
                
                <Cell value={this.state.cells[6]} id={6} onCellClick={this.handleCellClick}/>
                <Cell value={this.state.cells[7]} id={7} onCellClick={this.handleCellClick}/>
                <Cell value={this.state.cells[8]} id={8} onCellClick={this.handleCellClick}/>
                
                
            </div>
        )
    };
}


 

export default Board;