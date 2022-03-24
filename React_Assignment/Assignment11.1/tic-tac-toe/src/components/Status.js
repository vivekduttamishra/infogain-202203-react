import React from 'react';

const Status=(props)=>{
    console.log("Next Move is ", props.status)
    return (
        <div className='status'>
           <h2>Next Move is {props.status}</h2> 
        </div>
    )
};

export default Status;