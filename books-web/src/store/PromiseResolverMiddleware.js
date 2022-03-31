import {Status,StatusAction,WAITING,SUCCESS,errorStatus} from './Constants';


export const promiseResolver= store => next => action =>{

    if(action.payload && action.payload instanceof Promise){

        //how to handle promise
        const dispatch=store.dispatch;

        dispatch(WAITING);

        action
            .payload   //wait for promise to complete
            //if successful do this
            .then( result =>{
                dispatch(SUCCESS);
                dispatch({type:action.type, payload:result});
            })
            //if exception is thrown do this.
            .catch(error=>{
                dispatch(errorStatus(error));
            });

    } else{
        next(action); 
    
    }
}