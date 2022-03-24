import React from 'react';

const Game=(prop)=>{

    let value=prop.value;

    function handleClick(){
        
        value='O';
        console.log(`changing the value in cell ${prop.id} to ${value}`);
    }

    return (
        <button className='cell' 
                onClick={handleClick}
        > 
        {value} 
        </button>
    )
};

export default Game;