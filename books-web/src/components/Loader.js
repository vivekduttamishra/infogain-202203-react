import React from 'react';

const Loader=({loadingText,image='/images/loading.gif',condition=true, children})=>{
    //TODO: Initialize Here


    if(condition)
            return <img src={image} title={loadingText} alt={loadingText} className='loading-image' />
    else if(children)
        return children;
    else
        return null;
    
}

export default Loader;