import React from 'react';



const Cell=(props)=>{

    let value = props.value || '-';  //if props.value === falsy use '-' 

    let style={
        color: props.value ? "black" : "transparent"
    };


    return <button 
        style={style}
        onClick={ ()=> props.onCellClick(props.id)}
        className="cell">{value}</button>;
}




export default Cell;