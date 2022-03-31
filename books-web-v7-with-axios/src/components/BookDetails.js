import React from 'react';
import {removeBook} from '../store/BookActions';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Loader from './Loader';



const BookDetails = ({ book }) => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleRemove=async ()=>{

        await removeBook(book.isbn)(dispatch);
        console.log('removal success');
        navigate("/book/list");
    }


    return (
        <div className="row">
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
                <p className="description">{book.description}</p>
            </div>
            <div className="col col-4">
                <img src={book.cover} alt={book.title} title={book.title} className="book-manage-cover" />
                <div >
                    <button onClick={handleRemove} className='btn btn-danger'>Delete</button>
                    <Loader/>

                    
                </div>
            </div>
        </div>
    )
};

export default BookDetails;