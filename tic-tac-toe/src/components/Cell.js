import React from 'react';



const Cell=({id, value, onCellClick,winningCombo})=>{

    value = value || '-';  //if props.value === falsy use '-' 
  //direct cant give syle so giving style using style as obj in jsx
    let style={
        color: value==='-' ? "transparent" : null,
        backgroundColor:winningCombo?.includes(id)?"lightgreen":"transparent" //Game to board borad to cell then we chnge style
        
        
    };

//cell means nthing but a button we have used as event is of clicking in a game
    return <button 
        style={style}
        onClick={ ()=> onCellClick(id)}      //button click kelyvr onCellClick fun call hoil and id will have value
        className="cell">{value}</button>;
}




export default Cell;