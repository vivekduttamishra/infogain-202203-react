import React from 'react';

const Loader=({loadingText,size, image='/images/loading.gif',condition=true, children})=>{
    //TODO: Initialize Here

    let style={};
    if(size){
        style={
            width:`${size}%`,
            height:`${size}%`
        }
    };

    if(condition)
            return <img style={style} src={image} title={loadingText} alt={loadingText} className='loading-image' />
    else if(children)
        return children;
    else
        return null;
    
}

export default Loader;