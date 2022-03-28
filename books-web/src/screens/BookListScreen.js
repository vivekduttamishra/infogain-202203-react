import React, { useState, useEffect } from 'react';
import BookListItem from '../components/BookListItem';
import withTitle from '../utils/withTitle';
import withDate from '../utils/withDate';
import bookService from '../service/BookService';



const BookListScreen = ({ onBookSelect, now }) => {

    let [books, setBooks] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {

        bookService
            .getAllBooks()
            .then(setBooks);
        setTimeout(() => setSpinner(false), 1000)

    }, []);



    return (


        <div className='BookListScreen'>

            {
                spinner ?
                    <>
                        <h2 className="Wait">Please Wait</h2>
                        <h3 className="build-wait">Building our Recommendations</h3>
                        <div class="loader">
                            
                        </div>
                        
                    </> :

                    <div className='book-list'>
                        <h2 className="book-list">Our Recommendations</h2>
                        {books.map(book => <BookListItem onBookSelect={onBookSelect} key={book.isbn} book={book} />)}
                    </div>
            }

        </div>

    );
}

export default withDate(BookListScreen);   