import React from 'react';
import { Link } from 'react-router-dom';
import BookDetails from './BookDetails';

const BookListItem = ({ book, onBookSelect }) => {
    //TODO: Initialize Here


    return (
        // <Link className="list-item" to={`/book/info/${book.isbn}`} >
        //     <img src={book.cover} />
        //     <div className="list-info">
        //         <p className="title">{book.title}</p>
        //         <p className="author">{book.author}</p>
        //     </div>
        // </Link>

        <div className="main-body">
            <div>
                <div className="grid-view-container">
                    <div className="grid-view-item">
                        <Link className="list-item" to={`/book/info/${book.isbn}`}  >
                            <img src={book.cover} />
                            
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookListItem;