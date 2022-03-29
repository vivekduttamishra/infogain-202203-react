import React from 'react';
import {Link} from 'react-router-dom';

const BookListItem=({book,onBookSelect})=>{
    //TODO: Initialize Here
    

    return (
        <Link className="list-item" to={`/book/info/${book.isbn}`} >
            <img src={book.cover} />
            <div className="list-info">
                <p className="title">{book.title}</p>
                <p className="author">{book.author}</p>
            </div>
        </Link>
    );
}

export default BookListItem;