import React,{useState,useEffect} from 'react';
import BookDetails from '../components/BookDetails'
import withDate from '../utils/withDate';
import {useParams, Navigate } from 'react-router-dom';
import Loader from '../components/Loader';

import bookService from '../services/BookService';


const BookDetailsScreen=(props)=>{

    const [book,setBook] = useState(null);
    
    const params = useParams()
    

    useEffect(()=>{

        const loadBook=async()=>{
            let b = await bookService.getBookByIsbn(params.isbn);

            setBook(b);
        }

        loadBook();
    },[])

  
    if(book===null) //show loading
        return <Loader loadingText={`searching for isbn ${params.isbn}`} />
    
    if(book===undefined){
        return <Navigate to={`/notfound/Invalid or Missing Isbn/${params.isbn}`} />
    }
    

    return <BookDetails book={book} />         
       
    
}

export default BookDetailsScreen;