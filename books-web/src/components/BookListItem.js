import React from 'react';

const BookListItem=({book})=>{
    //TODO: Initialize Here
    

    return (
        <div className="list-item">
            
            <img src={book.cover} />
            <div className="list-info">
                <p className="title">{book.title}</p>
                <p className="author">{book.author}</p>
            </div>

        </div>
    );
}

export default BookListItem;