
import delay from '../utils/delay';

class UserRegisterService {

    static loggedInUserKey="currentUser";

    constructor() {
        this.users = [];
    }

    _saveUsers() {
        localStorage.setItem("users", JSON.stringify(this.users));
    }

    // async getAllBooks(){
    //     console.log('books',this.books);
    //     await delay(2000);
    //     return this.books;
    // }

    async getUser(user) {
        await delay(2000);

        if (!user.email)
            throw new Error("Please Enter Email");
        if (!user.password)
            throw new Error("Please Enter Password");

        if (localStorage.getItem('users')) {
            const allStoredUser = JSON.parse(localStorage.getItem('users'));

            const u = allStoredUser.find(x => x.email == user.email && x.password == user.password);
            if (u) {
                console.log("Login successful");
            } else {
                throw new Error("Wong credentials");
            }
        } else {
            throw new Error("Wong credentials");
        }
    }

    async addUser(user) {
        await delay(2000);
        if (!user.name)
            throw new Error("Please Enter User Name");
        if (!user.email)
            throw new Error("Please Enter Email");
        if (!user.password)
            throw new Error("Please Enter Password");

        this.users.push(user);
        this._saveUsers();
    }

    async logout(){
        await delay(1000);
        localStorage.removeItem(UserRegisterService.currentUser);
    }

    async getLoggedInUser(){
        let user= JSON.parse(UserRegisterService.currentUser);
        return user;
    }
}

export default new UserRegisterService();

