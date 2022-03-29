import delay from '../utils/delay';

class UserService{

    userRegistration(user){
        localStorage.setItem('registeredUsers',JSON.stringify(user));
    }
    userLogin(user){
        let registerUser =JSON.parse(localStorage.getItem("registeredUsers"))
        console.log('user',user)
        if(registerUser.email===user.email && registerUser.password===user.password){
            localStorage.setItem('loggedinuser',JSON.stringify(user))
            window.location.href = '/'
        }
        else{
            window.location.href ='/user/register'
        }
    }

    userLogout(){
        localStorage.setItem('loggedinuser',null)
        window.location.href='/user/login'
    }
}
export default new UserService();