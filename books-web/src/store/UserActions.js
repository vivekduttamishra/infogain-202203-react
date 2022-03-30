import {UserActions} from './Constants';
import service from '../services/UserService';

export const register = user => async(dispatch)=>{

    await service.register(user);
    dispatch({type:UserActions.LOGIN, payload:user})
}

export const login= (email,password) => async (dispatch) =>{

    var user = await service.login(email,password);
    dispatch({type:UserActions.LOGIN, payload:user});
}

export const logout= () => async(dispatch)=>{
    await service.logout();
    dispatch({type:UserActions.LOGOUT});
}

export const checkLogin = ()  =>async(dispatch)=>{
    let user =await service.getLoggedInUser();
    //console.log('checkLogin',user);
    
    dispatch({type:UserActions.LOGIN, payload:user}) ;
}
