
import delay from '../utils/delay';

class UserRegisterService {

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

            console.log("allStoredUser", allStoredUser.email)
            console.log("allStoredUser", allStoredUser.password)

            if (user.email === allStoredUser.email && user.password === allStoredUser.password) {
                console.log("Login successful");
            } else {
                throw new Error("Wong credentials");
            }
        } else {
            throw new Error("Wong credentials");
        }

        // if (localStorage.getItem('users')) {
        //     const allStoredUser = JSON.parse(localStorage.getItem('users'));
        //     const matchUser = allStoredUser.filter(storeUser => {
        //         return user.email === storeUser.email && user.password === storeUser.password;
        //     })
        //     if (matchUser.lenght) {
        //         console.log("Login successful");
        //     } else {
        //         throw new Error("Wong credentials");
        //     }
        // } else {
        //     throw new Error("Wong credentials");
        // }
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
}

export default new UserRegisterService();

