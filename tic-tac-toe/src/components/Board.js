import React from 'react';
import Cell from './Cell';



   //we are using props sent by Cell component to handle onCellClick
const Board=(props)=>{
        return (
            <div className='board'>
               {
                
                props.cells.map((cell,index)=>
                ( <Cell value={cell} key={index} id={index} onCellClick={props.onCellClick} winningCombo={props.winningCombo}/>)
                )
                }

               
               
                
                
            </div>
        )
    };


 

export default Board;