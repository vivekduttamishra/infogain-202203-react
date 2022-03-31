

import delay from '../utils/delay';


const dummyUsers=[
    {name:"Vivek Dutta Mishra", password:"p@ss#1", email:"vivek@email.com"},
    {name:"Shivanshi", password:"p@ss#1", email:"shivanshi@email.com"}
];

class UserService{

    static storeKey="users";
    static loggedInUserKey="currentUser";

    constructor(){
        this.users=null;
        this._load();
    }

    _load(){
        
        try{
            let jsonStr=localStorage.getItem(UserService.storeKey);
            this.users=JSON.parse(jsonStr);
        }catch(error){

        }

        if(!this.users){
           this.users=dummyUsers;
           this._save();
        }
    }

    _save(){
        localStorage.setItem(UserService.storeKey,JSON.stringify(this.users));
    }
 
    async register(user){
        await delay(2000);
        if(!user.name) 
            throw new Error("Missing Name");
        if(!user.email)
            throw new Error("Missing Email");

        if(!user.password)
            throw new Error("Missing Password");

        var existingUser= this.users.find(u=>u.email===user.email);
        if(existingUser)
            throw new Error("A user with this email exists");

        this.users.push(user);
        this._save();      
        
            
    }

    async login(email, password){
        await delay(2000);
        if(!email)
            throw new Error("Missing Email");

        if(!password)
            throw new Error("Missing Password");


        let user= this.users.find(user => user.email === email && user.password === password);

        if(user)
            localStorage.setItem(UserService.currentUser, JSON.stringify(user));
        else{
            this.logout();
            throw new Error("Invalid Credentials");
        }

        return user;
    }

    async logout(){
        await delay(1000);
        localStorage.removeItem(UserService.currentUser);
    }

    async getLoggedInUser(){
        let user= JSON.parse(UserService.currentUser);
        return user;
    }
}

export default new UserService();

