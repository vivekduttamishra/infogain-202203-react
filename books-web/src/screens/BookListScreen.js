import React,{useState,useEffect} from 'react';
import BookListItem from '../components/BookListItem';
import withTitle from '../utils/withTitle';
import withDate from '../utils/withDate';
import bookService from '../service/BookService';



const BookListScreen=({onBookSelect,now})=>{

   let [books,setBooks]=useState([]);

   useEffect(()=>{

    bookService
        .getAllBooks()
        .then(setBooks);

   },[]);
    


    return (
        <div className='BookListScreen'>
           
            <div className='book-list'>
                {books.map(book=><BookListItem onBookSelect={onBookSelect} key={book.isbn} book={book}/>)}
            </div>
            
        </div>
    );
}

export default withDate(withTitle(BookListScreen,"Recommended Books"));