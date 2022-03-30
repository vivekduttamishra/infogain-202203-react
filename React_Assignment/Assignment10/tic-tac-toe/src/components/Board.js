import React from 'react';
import Cell from './Cell';



   
const Board=(props)=>{
        return (
            <div className='board'>
    
                {props.cells.map((cell,index)=>( <Cell value={cell} winningCombo={props.winningCombo} key={index} id={index} onCellClick={props.onCellClick}/>))}

               
               
                
                
            </div>
        )
    };


 

export default Board;