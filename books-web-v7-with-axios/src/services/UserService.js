import delay from '../utils/delay';
import axios from './http';
class UserService{


    static loggedInUserKey="currentUser";


    async register(user){
       
        if(!user.name) 
            throw new Error("Missing Name");
        if(!user.email)
            throw new Error("Missing Email");

        if(!user.password)
            throw new Error("Missing Password");


        const response = await axios.post('users', user);

        console.log('response.data',response.data);
       
        user={...response.data.user, token:response.data.accessToken};
        console.log(user);

        localStorage.setItem(UserService.loggedInUserKey, JSON.stringify(user));
        return user;

        
        
            
    }

    async login(email, password){
        
        if(!email)
            throw new Error("Missing Email");

        if(!password)
            throw new Error("Missing Password");


        const response = await axios.post('signin', {email,password});

        console.log(response.data)
        let user={...response.data.user, token:response.data.accessToken};
        console.log(user);
        localStorage.setItem(UserService.loggedInUserKey, JSON.stringify(user));
        return user;
    }

    async logout(){
        await delay(1000);
        localStorage.removeItem(UserService.loggedInUserKey);
    }

    async getLoggedInUser(){
        let str= localStorage.getItem(UserService.loggedInUserKey);
        let user = str?JSON.parse(str):null;
        return user;
    }
}

export default new UserService();

