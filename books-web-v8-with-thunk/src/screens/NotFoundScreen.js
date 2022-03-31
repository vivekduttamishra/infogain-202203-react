import React from 'react';
import {useParams, useLocation} from 'react-router-dom'

const NotFoundScreen=({})=>{
    //TODO: Initialize Here
    const params=useParams();  
    const location = useLocation();
    // console.log('params',params)  ;
    // console.log('location',location);
    

    let error= params.error || "Not Found";
    let info = params.info || `Invalid Resource: ${location.pathname}`;





    return (
        <>
            <h1 className='text text-danger'>{error}</h1>
            <h2 className='text text-danger'>{info}</h2>
            <p>Don't worry. We have noted this and we will try to get what you need.</p>
            <img src="/images/404.jpg"  alt="Not Found" className="not-found-image" />
        </>
    );
}

export default NotFoundScreen;