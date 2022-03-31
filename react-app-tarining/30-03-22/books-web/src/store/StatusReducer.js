
import {StatusActions,Status} from './Constants'

/* status should look like 

{
    status:   IDLE/WAITING/SUCCESS/ERROR
    message: generally related to the error
}
*/

export const statusReducer = (status={status:Status.STATUS_IDLE}, action )=>{

    switch(action.type){

        case StatusActions.STATUS_SET:
            console.log('Setting status to ',action.payload );
            
            return action.payload;

        default:
            return status;
    }
}



