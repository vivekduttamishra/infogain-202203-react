import {useContext,createContext, useReducer} from 'react';
import service from '../services/UserService';


//declare the action names

export const UserActions={
    LOGIN:'USER_LOGIN',
    LOGOUT:'USER_LOGOUT'
}

const userReducer = (user=null, action)=>{
 
        console.log('inside reducer action',action);
        
        switch(action.type){

            case UserActions.LOGIN: //{type:UserActions.LOGIN, user:{...}}
                
                return action.user; //user set

            case UserActions.LOGOUT:  //{type:UserActions.LOGOUT}
                return null; //user removed

            default:
                return user;
        }
}


const register = dispatch => async(user)=>{

    await service.register(user);
    dispatch({type:UserActions.LOGIN, user})
}

const login= dispatch => async (email,password) =>{

    var user = await service.login(email,password);
    dispatch({type:UserActions.LOGIN, user});
}

const logout= dispatch => async()=>{
    await service.logout();
    dispatch({type:UserActions.LOGOUT});
}

const checkLogin = dispatch =>async()=>{
    let user = await service.getLoggedInUser();
    console.log('in checkLogin action creator ', user);
    dispatch({type:UserActions.LOGIN, user}) ;
}




const UserContext =  createContext();

export const UserContextProvider = ({ children }) =>{

        const [user, dispatch] = useReducer(userReducer, null);

        const actions = {
            register,
            login,
            logout,
            checkLogin
        };

        const actualActions={}  //get empty object

        for(const actionName in  actions){

            let actualAction = actions[actionName](dispatch);

            actualActions[actionName]=actualAction;
        }


        return (
            <UserContext.Provider value={{user, dispatch, ...actualActions}} >
                {children}
            </UserContext.Provider>
        );

}

export const useUserContext=()=>{
    return useContext(UserContext);
}
