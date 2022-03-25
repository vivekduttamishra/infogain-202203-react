import React from 'react';
import BookDetails from '../components/BookDetails'
import withDate from '../utils/withDate';
import {useParams } from 'react-router-dom';

const BookDetailsScreen=(props)=>{

    

    console.log('props in BookDetailsScreen',props);
    const params = useParams()
    console.log('match',params);
    
    

    //TODO: Initialize Here
    

    return (
        <div className='BookDetailsScreen'>
            <h1>Book Details for {params.isbn}</h1>           
        </div>
    );
}

export default BookDetailsScreen;