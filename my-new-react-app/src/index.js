import react from "react";
import reactDom from "react-dom";


const component=react.createElement("h1",null,"welcome to react");
reactDom.render(component,document.getElementById("placeholder"));