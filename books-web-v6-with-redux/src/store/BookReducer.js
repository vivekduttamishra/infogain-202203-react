import {BookActions} from './Constants'


//will handle a list of books
export const booksReducer=(books=[], action)=>{

    switch(action.type){

        case BookActions.BOOKS_SELECT:  //{type: BookActions.BOOKS_SELECT, payload:[array of book]}
            return action.payload; //select all this book

        //we need to add a new book to current list
        case BookActions.BOOK_ADD:  //{type: BookActions.BOOK_ADD, payload: one_book}
            return [...books, action.payload];

        //remove a book from the list
        case BookActions.BOOK_REMOVE: //{type: BookActions.BOOK_REMOVE, payload:isbn_of_the_book}
            return books.filter( b=> b.isbn!==action.payload);

        default:
            return books;
    }

}

//This reducer handles a selected book only
export const selectedBookReducer=(book=null, action)=>{

    switch(action.type){
        case BookActions.BOOK_SELECT:  //{type: BookActions.BOOK_SELECT, payload:one_book_or_null}
            return action.payload;
        default:
            return book;
    }
}


