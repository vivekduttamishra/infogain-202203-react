import React from 'react';



const Cell=({id, value, onCellClick})=>{

    value = value || '-';  //if props.value === falsy use '-' 
  //direct cant give syle so giving style using style as obj in jsx
    let style={
        color: value==='-' ? "transparent" : null,
    

        
    };

//cell means nthing but a button we have used as event is of clicking in a game
    return <button 
        style={style}
        onClick={ ()=> onCellClick(id)}
        className="cell">{value}</button>;
}




export default Cell;