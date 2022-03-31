import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
   
  });



//this will happen before every request
instance.interceptors.request.use(function (config) {
    var str= localStorage.getItem("currentUser");
    var token='';
    if(str){
      var user= JSON.parse(str);
      token=user.token;
    }
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });


  export default instance;