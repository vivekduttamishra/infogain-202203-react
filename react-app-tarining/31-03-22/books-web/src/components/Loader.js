import React from 'react';
import {useSelector} from 'react-redux';
import {Status} from '../store/Constants';

const Loader=({loadingText,size, image='/images/loading.gif',condition, children})=>{
    //TODO: Initialize Here

    let style={};
    if(size){
        style={
            width:`${size}%`,
            height:`${size}%`
        }
    };

    const status= useSelector(s=>s.status);

    if(condition===undefined){
        condition= status.status=== Status.STATUS_WAITING;
    }

    if(condition)
            return <img style={style} src={image} title={loadingText} alt={loadingText} className='loading-image' />
    else if(children)
        return children;
    else
        return null;
    
}

export default Loader;