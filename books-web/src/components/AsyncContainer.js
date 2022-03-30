import React from 'react';
import {useSelector} from 'react-redux';
import {Status} from '../store/Constants';
import {useNavigate} from 'react-router-dom'

const AsyncContainer=({loadingText,size, image='/images/loading.gif', model, redirectUrl,errorRenderer,condition=true, children})=>{
    //TODO: Initialize Here

    const status= useSelector(s=>s.status);
    const navigate=useNavigate();

    console.log('status',status);
    

    let style={};
    if(size){
        style={
            width:`${size}%`,
            height:`${size}%`
        }
    };

    if(status.status===Status.STATUS_ERROR)
    {

        console.log('error block',status.error);
        if(errorRenderer)
            return errorRenderer(status.error);
        else if(redirectUrl)
            return navigate(redirectUrl);
        else
            return <h2 className="text text-danger">{status.error.message}</h2>;


    }

    if(!model ||  status.status===Status.STATUS_WAITING  || status.status===Status.STATUS_IDLE)
            return <img style={style} src={image} title={loadingText} alt={loadingText} className='loading-image' />

    
    if(children)
        return children;
    else
        return null;
    
}

export default AsyncContainer;