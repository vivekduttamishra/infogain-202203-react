import React from 'react';

const Cell=({id, value,result,onCellClick})=>{

    value = value || '-';  //if props.value === falsy use '-' 

    let style={
        borderTop:  id>2 &&     "2px solid black",
        borderBottom:id<6 && "2px solid black",
        borderLeft: id%3!==0 && "2px solid black",
        borderRight: id%3!==2 &&  "2px solid black",
        color: value==='_' ? "transparent": null
        // color: value==='-' ? "transparent" : null
    };
    if(value!=='_' ||result.over){
        style.cursor='not-allowed';
        handleCellClick=null; 
    };

    return <button 
        style={style}
        onClick={ ()=> onCellClick(id)}
        className="cell">{value}</button>;
}

export default Cell;