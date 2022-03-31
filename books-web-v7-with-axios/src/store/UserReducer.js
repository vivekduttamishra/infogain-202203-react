

import {UserActions} from './Constants';

export const userReducer = (user=null, action)=>{
 
       // console.log('inside reducer action',action);
        
        switch(action.type){

            case UserActions.LOGIN: //{type:UserActions.LOGIN, payload:{...}}
                
                return action.payload; //user set

            case UserActions.LOGOUT:  //{type:UserActions.LOGOUT}
                return null; //user removed

            default:
                return user;
        }
}
