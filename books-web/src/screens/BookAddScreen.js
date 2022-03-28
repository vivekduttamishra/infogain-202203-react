import React from 'react';
import withTitle from '../utils/withTitle';
import InputField from '../components/InputField';
import useForm from '../utils/useForm';
import bookService from '../services/BookService';
import {useNavigate} from 'react-router-dom';
import Loader from '../components/Loader';

const BookAddScreen=({})=>{
    //TODO: Initialize Here

    var [error,setError]=React.useState(null);
    var [loading,setLoading]=React.useState(false);
    var navigate =useNavigate();

    var [book,updateBookInfo, addBook]=useForm({
        isbn:'',
        title:'',
        author:'',
        cover:'',
        price:0,
        rating:0,
        description:''
    }, async e=>{
        //console.log('book',book);
        try{
            setError(null);
            setLoading(true);
            await bookService.addBook(book);
            return navigate("/book/list"); //go to the book list when successful
        }catch(error){
            setError(error.message);
        }
        setLoading(false);
        
    });

    


  
  
    return (
        <div className='row'>
           <div className='col-8'>
            <form onSubmit={addBook}>
               <InputField name="isbn" value={book.isbn} onChange={updateBookInfo}/>
               <InputField name="title" value={book.title} onChange={updateBookInfo} />
               <InputField name="author" value={book.author} onChange={updateBookInfo} />
               <InputField name="cover" value={book.cover} onChange={updateBookInfo} />
               <InputField name="price" value={book.price} onChange={updateBookInfo} />
               <InputField name="rating" value={book.rating} onChange={updateBookInfo} />
               <InputField name="description" value={book.description} onChange={updateBookInfo} />
               <button className="btn btn-primary" type="submit">Add Book</button>
               <Loader size={40} condition={loading} />
               <span className='text text-danger'> {error}</span>
            </form>
            </div> 
            <div className='col-4'>
                <img alt='cover preview' src={book.cover} title={book.title} className='book-cover-preview' />
            </div>
        </div>
    );
}

export default withTitle( BookAddScreen, "Add New Book");