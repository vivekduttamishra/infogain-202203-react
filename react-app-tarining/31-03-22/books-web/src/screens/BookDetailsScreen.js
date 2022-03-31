import React,{useState,useEffect} from 'react';
import BookDetails from '../components/BookDetails'
import withDate from '../utils/withDate';
import {useParams, Navigate } from 'react-router-dom';
import Loader from '../components/Loader';
import {useSelector, useDispatch,connect} from 'react-redux';
import {getBookByIsbn} from '../store/BookActions';
import AsyncContainer from '../components/AsyncContainer';




const BookDetailsScreen=(props)=>{

    //const book= useSelector(s=>s.selectedBook);
    console.log('prop',props);

    const {book, getBookByIsbn}=props;

    const params = useParams();

    //const dispatch = useDispatch();
    

    useEffect(()=>{

        getBookByIsbn(params.isbn);
       
    },[params.isbn])

  
  

    return (

        <AsyncContainer model={book}  >
            <BookDetails book={book} />
        </AsyncContainer>

    )   
       
    
}

const mapReduxStateToProps = (state) =>{
    return {
        book:state.selectedBook
    }
}

const actions={
    getBookByIsbn
}

export default connect(mapReduxStateToProps,actions)(BookDetailsScreen);