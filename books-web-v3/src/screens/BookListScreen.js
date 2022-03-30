import React,{useState,useEffect} from 'react';
import BookListItem from '../components/BookListItem';
import withTitle from '../utils/withTitle';
import withDate from '../utils/withDate';
import bookService from '../services/BookService';
import Loader from '../components/Loader';



const BookListScreen=({onBookSelect,now})=>{

   let [books,setBooks]=useState([]);

   useEffect(()=>{

    bookService
        .getAllBooks()
        .then(setBooks);

   },[]);
    

    return (
        <Loader loadingText="loading books" condition={books.length===0} >
           
            <div className='row'>
                {books.map(book=><BookListItem onBookSelect={onBookSelect} key={book.isbn} book={book}/>)}
            </div>
            
        </Loader>
    );
}

export default withDate(withTitle(BookListScreen,"Recommended Books"));