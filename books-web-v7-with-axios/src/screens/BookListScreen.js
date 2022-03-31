import React,{useState,useEffect} from 'react';
import BookListItem from '../components/BookListItem';
import withTitle from '../utils/withTitle';
import withDate from '../utils/withDate';

import AsyncContainer from '../components/AsyncContainer';
import {useSelector,useDispatch} from 'react-redux';
import {getAllBooks} from '../store/BookActions';



const BookListScreen=({onBookSelect,now})=>{

   //let [books,setBooks]=useState([]);

    const books= useSelector(s=>s.books);
    const dispatch= useDispatch();

   useEffect(()=>{

        getAllBooks()(dispatch);
   
   },[dispatch]);
    

    return (
        <AsyncContainer model={books.length} >
           
            <div className='row'>
                {books.map(book=><BookListItem onBookSelect={onBookSelect} key={book.isbn} book={book}/>)}
            </div>
            
        </AsyncContainer>
    );
}

export default withDate(withTitle(BookListScreen,"Recommended Books"));