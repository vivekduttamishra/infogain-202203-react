import React from 'react';
import Cell from './Cell';

const Board=(props)=>{

    let message;
    if(props.winner)
    message="Cursor not Allowed";

        return (
            <>
            <h2 className='board-name'>{message}</h2> 
            <div className='board'>
    
                {props.cells.map((cell,index)=>( <Cell value={cell} key={index} id={index} onCellClick={props.onCellClick} winner={props.winner}/>))}

            </div>
            </>
        )
    };

export default Board;