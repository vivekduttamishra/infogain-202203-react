import React from 'react';
import BookDetails from '../components/BookDetails'

const BookDetailsScreen=({selectedBook,onBack})=>{
    //TODO: Initialize Here
    

    return (
        <div className='BookDetailsScreen'>
            <h1>Book Details</h1>
            <button onClick={onBack}>Back</button>
            <BookDetails book={selectedBook} />
        </div>
    );
}

export default BookDetailsScreen;