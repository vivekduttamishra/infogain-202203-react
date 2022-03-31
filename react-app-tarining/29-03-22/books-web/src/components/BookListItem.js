import React from 'react';
import {Link} from 'react-router-dom';

const BookListItem=({book,onBookSelect})=>{
    //TODO: Initialize Here
    

    return (
        <Link className=" col col-6  col-md-4 col-lg-2" to={`/book/info/${book.isbn}`} >
            <img src={book.cover} alt={book.title} className="grid-image" title={book.title}/>
            <h2 className="book-list-title">{book.title}</h2>
        </Link>
    );
}

export default BookListItem;