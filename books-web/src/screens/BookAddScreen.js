import React from 'react';
import withTitle from '../utils/withTitle';
// import InputField from '../components/Input';
// import useForm from '../utils/useForm';

import {useForm, InputField,AsyncForm} from '../components/Input';

//import bookService from '../services/BookService';
import {useDispatch} from 'react-redux';
import {addBook} from '../store/BookActions';


const BookAddScreen=({})=>{
   
    var [book,updateBookInfo]=useForm({
        isbn:'',
        title:'',
        author:'',
        cover:'',
        price:0,
        rating:0,
        description:''
    });

    const dispatch=useDispatch();

    const save= async e=> {       
        await addBook(book)(dispatch);
    }

    
    return (
        <div className='row'>
           <div className='col-8'>
            <AsyncForm actionName="Add New Book" action={save}>
               
               <InputField name="isbn" value={book.isbn} onChange={updateBookInfo}/>
               <InputField name="title" value={book.title} onChange={updateBookInfo} />
               <InputField name="author" value={book.author} onChange={updateBookInfo} />
               <InputField name="cover" value={book.cover} onChange={updateBookInfo} />
               <InputField name="price" value={book.price} onChange={updateBookInfo} />
               <InputField name="rating" value={book.rating} onChange={updateBookInfo} />
               <InputField name="description" value={book.description} onChange={updateBookInfo} />
               
            </AsyncForm>
            </div> 
            <div className='col-4'>
                <img alt='cover preview' src={book.cover} title={book.title} className='book-cover-preview' />
            </div>
        </div>
    );
}

export default withTitle( BookAddScreen, "Add New Book");