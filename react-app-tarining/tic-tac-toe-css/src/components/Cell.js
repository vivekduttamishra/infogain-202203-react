import React from 'react';



const Cell = ({ id, value, onCellClick, move, winningCombo }) => {

    value = value || '-';  //if props.value === falsy use '-' 

    let style = {
        color: value === '-' ? "transparent" : null,
        backgroundColor:winningCombo?.includes(id)?"lightgreen":"transparent" //Game to board borad to cell then we chnge style
    };
    
    if (move === null) {
        style.cursor = "not-allowed"
    }


    return (
        <>
            <button disabled={move === null}
                style={style}
                onClick={() => onCellClick(id)}
                className="cell">{value}</button>
        </>
    );
}




export default Cell;