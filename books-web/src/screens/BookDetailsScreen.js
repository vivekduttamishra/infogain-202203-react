import React from 'react';
import BookDetails from '../components/BookDetails'
import withDate from '../utils/withDate';
// import IfElse from '../components/Ifelse;'
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../screens/NotFoundScreen'

const BookDetailsScreen = ({ data }) => {

    const params = useParams()
    console.log('match', params);



    return (
        <>
            <div className='BookDetailsScreen'>
                {
                    data.filter((book) => book.isbn === params.isbn)
                        .map((book) => (
                            <div key={book.isbn}>
                                <BookDetails book={book} />
                            </div>

                        ))} 
                          
                   
            </div>
        </>
    );
}

export default BookDetailsScreen;