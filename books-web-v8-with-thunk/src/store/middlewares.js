

export const loggerMiddleware = store => next => action =>{

    console.log("Logger Middleware",action);  //display which action your are running
    //console.log(store);
    next(action); //let things work normally

}


export const actionKiller=(...actionNames) => store=>next=>action=>{

    if(actionNames.includes(action.type)){
        console.log('Action Killed', action.type)
        return ; //don't pass it to next
    }

    //for all others
    next(action);
}

export const functionHandler = store =>next => action =>{

    if(typeof(action)==='function')
        action(store.dispatch); //call the function instead of passing to next
    else
        next(action);
    

}



