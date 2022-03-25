import React from 'react';



const Cell = ({ id, value, onCellClick, winner }) => {

    value = value || '-';  //if props.value === falsy use '-' 

    let style = {
        color: value === '-' ? "transparent" : null
    
    };

    

   


    return (
        <>
            <button
                style={style}
                onClick={() => onCellClick(id)}
                className="cell">{value}</button>
        </>
    );
}




export default Cell;