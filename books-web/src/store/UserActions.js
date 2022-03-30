import {UserActions} from './Constants';
import service from '../services/UserService';

export const register = dispatch => async(user)=>{

    await service.register(user);
    dispatch({type:UserActions.LOGIN, payload:user})
}

export const login= dispatch => async (email,password) =>{

    var user = await service.login(email,password);
    dispatch({type:UserActions.LOGIN, payload:user});
}

export const logout= dispatch => async()=>{
    await service.logout();
    dispatch({type:UserActions.LOGOUT});
}

export const checkLogin = dispatch =>async()=>{
    let user =await service.getLoggedInUser();
    //console.log('checkLogin',user);
    
    dispatch({type:UserActions.LOGIN, payload:user}) ;
}
