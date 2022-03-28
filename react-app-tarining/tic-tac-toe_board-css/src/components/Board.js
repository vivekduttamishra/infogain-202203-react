import React from 'react';
import Cell from './Cell';

const Board=(props)=>{

        return (
            <div className='board'>
    
                {props.cells.map((cell,index)=>( <Cell value={cell} key={index} id={index} onCellClick={props.onCellClick} move={props.move} winner={props.winner}/>))}

            </div>
        )
    };

export default Board;