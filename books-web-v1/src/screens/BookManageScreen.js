import React,{useState} from 'react';
import If from '../components/If';
import BookDetails from '../components/BookDetails';
import books from '../data/books';

const BookList = ({ books, onSelectBook }) => {


    return (
        <div className="list-group">

            {books.map(book => (
                <button type="button"
                    onClick={() => onSelectBook(book)}
                    key={book.isbn}
                    className="list-group-item list-group-item-action">
                    {book.title}
                </button>
            ))}


        </div>
    )

};



const BookManageScreen = () => {

    const [selectedBook, selectBook]=useState(null); //no book selected initially

    return (
        <div className='BookListScreen'>
            <h1>Manage Books</h1>
            <div className="row">
                <div className="list col col-3">
                    <h3>Book List</h3>
                    <BookList books={books} onSelectBook={selectBook} />
                </div>
                <div className="col col-9">
                    {selectedBook
                        ? <BookDetails book={selectedBook} />
                        : <p>Please select a book</p>
                    }
                </div>
            </div>

        </div>
    );
}


export default BookManageScreen;