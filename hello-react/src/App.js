import React from 'react';

const headerStyle = {
    backgroundColor: 'black',
    color: "red"
}

function SiteTitle(args) {

    console.log('args',args);
    

    return <h1>{args.children}</h1>;
}

class Header extends React.Component {
    render() {
        return <div style={headerStyle}>

            <SiteTitle text="WWBooks" color="white" >
                World Wide Books
            </SiteTitle>
            
            <p>{this.props.subtitle}</p>
        </div>
    }
}

const HomePage = ()=> <div>
    <h2>Home Page</h2>
    <p>You are on the Home Page</p>
</div>


const App = ()=>{

    return <div >
        <Header subtitle="Home of all books of the "/>
        <HomePage/>
    </div>;
}
export default App;