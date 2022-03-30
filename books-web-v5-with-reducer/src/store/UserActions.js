/*
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
    let user =service.checkLogin();
    dispatch({type:UserActions.LOGIN, user}) ;
}
*/