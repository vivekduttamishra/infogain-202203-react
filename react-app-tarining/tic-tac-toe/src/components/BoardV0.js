import React from 'react';
import Cell from './Cell';
const Board=()=>{
    return (
        <div className='board'>

            <Cell value='-' id={0} />
            <Cell value='-' id={1} />
            <Cell value='-' id={2} />
            
            <Cell value='-' id={3} />
            <Cell value='-' id={4} />
            <Cell value='-' id={5} />
            
            <Cell value='-' id={6} />
            <Cell value='-' id={7} />
            <Cell value='-' id={8} />          

            
        </div>
    )
};

export default Board;