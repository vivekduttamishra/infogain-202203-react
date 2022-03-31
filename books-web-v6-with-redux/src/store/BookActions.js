import {BookActions,SUCCESS,WAITING, errorStatus} from './Constants';


import bookService from '../services/BookService';


export const  getAllBooks= () => async (dispatch)=>{

    try{
        dispatch(WAITING);
        const payload=await bookService.getAllBooks();
        dispatch(SUCCESS);
        dispatch({type:BookActions.BOOKS_SELECT,payload});

    }catch(error){
        dispatch(errorStatus(error));
    }
}

export const getBookByIsbn= (isbn) => async (dispatch)=>{
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