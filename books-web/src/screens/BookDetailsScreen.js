import React,{useState,useEffect} from 'react';
import BookDetails from '../components/BookDetails'
import withDate from '../utils/withDate';
import {useParams, Navigate } from 'react-router-dom';
import Loader from '../components/Loader';
import {useSelector, useDispatch} from 'react-redux';
import {getBookByIsbn} from '../store/BookActions';
import AsyncContainer from '../components/AsyncContainer';




const BookDetailsScreen=(props)=>{

    const book= useSelector(s=>s.selectedBook);
    
    const params = useParams();

    const dispatch = useDispatch();
    

    useEffect(()=>{

        getBookByIsbn(dispatch)(params.isbn);
       
    },[params.isbn])

  
  

    return (

        <AsyncContainer loadingCondition={!book}  >
            <BookDetails book={book} />
        </AsyncContainer>

    )   
       
    
}

export default BookDetailsScreen;