import React from 'react';

const Cell=(props)=>{
    // console.log("on cell val", props.val)

    let value = props.val || '-';  

    let style={
        color: props.val ? "black" : "transparent"
    };

    return <button 
        style={style}
        onClick={ ()=> props.cellClick(props.id)}
        className="cell">{value}</button>;
}

export default Cell;