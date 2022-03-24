
var placeholder = document.getElementById('placeholder');

var component = <div>
                    <h1>Hello React JSX World!</h1>
                    <div className="container">
                        <p>Welcome to the World of React</p>
                    </div>
                </div> ;


//we can't add react component directly to DOM
//placeholder.innerHTML=component;

ReactDOM.render( component, placeholder);