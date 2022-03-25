import React from 'react';

const If=({condition, children})=>{
   
    //children is a ReactComponent
    //condition is a prop evaluating to bool
    if(condition) 
        return children; //wrapped content
    else
        return null;  //no UI
}

export default If;
