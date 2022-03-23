
var placeholder = document.getElementById('placeholder');


//placeholder.innerHTML ="Hi from Plain JS";


var component = React.createElement("h2",null,"Hello From React"); //<h2>Hello From React</h2>


//we can't add react component directly to DOM
//placeholder.innerHTML=component;

ReactDOM.render( component, placeholder);