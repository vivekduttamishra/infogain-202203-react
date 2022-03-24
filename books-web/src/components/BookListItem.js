import React from 'react';

const BookListItem=({book,onBookSelect})=>{
    //TODO: Initialize Here
    

    return (
        <div className="list-item" onClick={()=>onBookSelect(book)}>
            
            <img src={book.cover} />
            <div className="list-info">
                <p className="title">{book.title}</p>
                <p className="author">{book.author}</p>
            </div>

        </div>
    );
}

export default BookListItem;