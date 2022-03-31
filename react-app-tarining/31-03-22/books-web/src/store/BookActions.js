import {BookActions,SUCCESS,WAITING, errorStatus} from './Constants';


import bookService from '../services/BookService';


export const getAllBooks = ()=>{
    return {type:BookActions.BOOKS_SELECT, payload:bookService.getAllBooks()};
}


export const getBookByIsbn= (isbn) => {
    return {type:BookActions.BOOK_SELECT, payload:bookService.getBookByIsbn(isbn)}    
}

export const addBook= book => async dispatch =>{
 
        try{
            dispatch(WAITING);
            const payload = await bookService.addBook(book);
            dispatch(SUCCESS);
            dispatch({type:BookActions.BOOK_ADD,payload});
        }catch(error){
            dispatch(errorStatus(error));
        }   
}

export const removeBook = isbn => async dispatch =>{

    try{
        
        dispatch(WAITING);
        await bookService.removeBook(isbn);
        
        dispatch(SUCCESS);
        dispatch({type:BookActions.BOOK_REMOVE,payload:isbn});
    }catch(error){
        
        dispatch(errorStatus(error));
    }
}