import React from 'react';
import {removeBook} from '../store/BookActions';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Loader from './Loader';
import {Status} from '../store/Constants';



const BookDetails = ({ book }) => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const status = useSelector(s=>s.status);
    const [deleteAttempted,setDeleteAttempted]= React.useState(false);


    React.useEffect(()=>{
        if(deleteAttempted && status.status===Status.STATUS_SUCCESS)
            navigate('/book/list');

    },[status,deleteAttempted,navigate]);


    const handleRemove=async ()=>{

        //await removeBook(book.isbn) (dispatch);
        setDeleteAttempted(true);
        removeBook(book.isbn)(dispatch);
        
        
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