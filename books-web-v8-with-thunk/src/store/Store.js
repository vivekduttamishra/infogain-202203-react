//import all our reducers

import {booksReducer,selectedBookReducer} from './BookReducer';
import {statusReducer} from './StatusReducer';
import {userReducer} from './UserReducer';

//now we will merge them as one store

import{loggerMiddleware,actionKiller,functionHandler} from './middlewares';

import {combineReducers, createStore, applyMiddleware,compose} from 'redux';
import {UserActions} from './Constants';

import thunk from 'redux-thunk';


//step one combine all reducer to one

const reducers = combineReducers({

   books: booksReducer,
   selectedBook: selectedBookReducer,
   user: userReducer,
   status: statusReducer 

});



const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
         loggerMiddleware,
         thunk)
  // other store enhancers if any
);
const store = createStore(reducers, enhancer);


// export default createStore(reducers, 
//                applyMiddleware(
//                   loggerMiddleware,
//                   thunk             
//                   ));

export default store;