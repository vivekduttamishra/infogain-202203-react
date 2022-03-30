import {BookActions,SUCCESS,WAITING, errorStatus} from './Constants';


import bookService from '../services/BookService';


export const  getAllBooks= dispatch => async ()=>{

    try{
        dispatch(WAITING);
        const payload=await bookService.getAllBooks();
        dispatch(SUCCESS);
        dispatch({type:BookActions.BOOKS_SELECT,payload});

    }catch(error){
        dispatch(errorStatus(error));
    }
}

export const getBookByIsbn= dispatch => async (isbn)=>{
    try{
        dispatch(WAITING);
        const payload= await bookService.getBookByIsbn(isbn);
        console.log('payload in BOOK_SELECT',payload);
        
        dispatch(SUCCESS);
        dispatch({type:BookActions.BOOK_SELECT, payload});
    }catch(error){
        dispatch(errorStatus(error));
    }
}