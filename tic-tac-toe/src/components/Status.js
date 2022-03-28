import React from 'react';

const Status=({move,winner,movesLeft})=>{

    let message=`Next Move is ${move}`;

   
    if(winner)
        message=`"${winner}" Wins`;
    else if(movesLeft===0 && winner===null)
        message=`Stalemate`;
    else  if(!move)
        message="Press Start to Begin";
    else
        message=`Move: ${move} (${movesLeft}/9 moves Left)`;


    return (
        <div className='status'>
           <h2>{message}</h2> 
        </div>
    )
};

export default Status;