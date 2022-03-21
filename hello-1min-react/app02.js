
var placeholder = document.getElementById('placeholder');

var component = React.createElement(
    "div", {style:{color:'white',background:'black'}},
    React.createElement("h2",null,"Hello React"),
    React.createElement("a", {
                    href:"reactjs.org",
                    style:{
                        color:'orangered',
                        fontWeight:'bold',
                        textDecoration:'none',
                        
                    }
            },"React Home Page")
)


//we can't add react component directly to DOM
//placeholder.innerHTML=component;

ReactDOM.render( component, placeholder);