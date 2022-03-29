import React from 'react';

const Status=({next,result})=>{

    let message=`Next : ${next}`; //default message
    if(result.over){
        if(result.winner){
            message=`"${result.winner}" Wins`;
        } else
            message="Stalemate";
    }

    return (
            <div className="status">
                {message}
            </div>
            );
            
}


export default Status;