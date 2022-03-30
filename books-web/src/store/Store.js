//import all our reducers

import {booksReducer,selectedBookReducer} from './BookReducer';
import {statusReducer} from './StatusReducer';
import {userReducer} from './UserReducer';

//now we will merge them as one store

import {combineReducers, createStore} from 'redux';


//step one combine all reducer to one

const reducers = combineReducers({

   books: booksReducer,
   selectedBook: selectedBookReducer,
   user: userReducer,
   status: statusReducer 

});


export default createStore(reducers);