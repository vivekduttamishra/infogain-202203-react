import React from 'react';
import Cell from './Cell';

const Board = (props) => {
    console.log("On broad cells",props.value)

        return (
            <div className='board'>
    
                <Cell val={props.value[0]} id={0} cellClick={props.onCellClick}/>
                <Cell val={props.value[1]} id={1} cellClick={props.onCellClick}/>
                <Cell val={props.value[2]} id={2} cellClick={props.onCellClick}/>
                
                <Cell val={props.value[3]} id={3} cellClick={props.onCellClick}/>
                <Cell val={props.value[4]} id={4} cellClick={props.onCellClick}/>
                <Cell val={props.value[5]} id={5} cellClick={props.onCellClick}/>
                
                <Cell val={props.value[6]} id={6} cellClick={props.onCellClick}/>
                <Cell val={props.value[7]} id={7} cellClick={props.onCellClick}/>
                <Cell val={props.value[8]} id={8} cellClick={props.onCellClick}/>
                
                
            </div>
        )
    };

export default Board;