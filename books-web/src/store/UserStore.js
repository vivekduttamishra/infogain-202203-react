import {useContext,createContext, useReducer} from 'react';
import service from '../services/UserService';


//declare the action names

export const UserActions={
    LOGIN:'USER_LOGIN',
    LOGOUT:'USER_LOGOUT'
}

const userReducer = (user=null, action)=>{
 
        switch(action.type){

            case UserActions.LOGIN: //{type:UserActions.LOGIN, user:{...}}
                return user; //user set

            case UserActions.LOGOUT:  //{type:UserActions.LOGOUT}
                return null; //user removed

            default:
                return user;
        }
}




const UserContext =  createContext();

const UserContextProvider = ({ children }) =>{

        const [user, dispatch] = useReducer(userReducer, null);


        return (
            <UserContext.Provider value={{user,dispatch}}>
                {children}
            </UserContext.Provider>
        );

}

