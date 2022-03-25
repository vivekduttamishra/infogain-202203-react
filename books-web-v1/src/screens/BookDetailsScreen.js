import React from 'react';
import BookDetails from '../components/BookDetails'
import withDate from '../utils/withDate';

const BookDetailsScreen=({selectedBook,onBack,now})=>{
    //TODO: Initialize Here
    

    return (
        <div className='BookDetailsScreen'>
            <h1>Book Details</h1>
            <p>Date: {now.toString()}</p>
            <button onClick={onBack}>Back</button>
            <BookDetails book={selectedBook} />
        </div>
    );
}

export default withDate(BookDetailsScreen);