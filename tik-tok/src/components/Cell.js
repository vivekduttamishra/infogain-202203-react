import React from 'react';


const Cell = ({value,onCellClick,id,result}) => {

    let handleCellClick=() => onCellClick(id);

    const winningCell= result.over && result.winningSequence && result.winningSequence.includes(id);
    const opacity= result.over && !result.winner ? 0.3 : 1;

    let style={
        borderTop:  id>2 &&     "2px solid black",
        borderBottom:id<6 && "2px solid black",
        borderLeft: id%3!==0 && "2px solid black",
        borderRight: id%3!==2 &&  "2px solid black",
        color: value==='_' && "transparent",
        backgroundColor: winningCell && "LightGreen",
        opacity: opacity
    };

    if(value!=='_' ||result.over){
        style.cursor='not-allowed';
        handleCellClick=null; //no event will be triggered.
    };

    //console.log('style: ',id, style);
    return (
        <button className='cell' style={style}
            onClick={handleCellClick}>
            {value}
        </button>
    );

}


export default Cell;