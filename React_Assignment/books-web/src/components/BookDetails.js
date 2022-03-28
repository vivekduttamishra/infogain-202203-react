import React from 'react';


const BookDetails = ({ book }) => {

    return (
        <div className="row">
       
            <div className="col col-4">
                <img src={book.cover} alt={book.title} title={book.title} className="book-manage-cover" />
            </div>
            <div className="col col-8">
                <h3>{book.title}</h3>
                <h4> by {book.author}</h4>   
                <hr/>
                <h5>Meta</h5>
                <ul>
                    <li>Price: ₹ {book.price}</li>
                    <li>Rating: {book.rating} / 5</li>
                </ul>
                <h5>Description</h5>
                <p className="description text-justify">{book.description}</p>
            </div>
        </div>
    )
};

export default BookDetails;