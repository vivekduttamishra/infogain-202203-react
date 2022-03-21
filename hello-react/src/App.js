import React from 'react';

const headerStyle = {
    backgroundColor: 'black',
    color: "red"
}

function SiteTitle() {

    return <h1>Book's Web</h1>;

}

class Header extends React.Component {
    render() {
        return <div style={headerStyle}>
            <SiteTitle />
            <p>World of books...</p>
        </div>
    }
}


const HomePage = ()=> <div>
    <h2>Home Page</h2>
    <p>You are on the Home Page</p>
</div>


const App = ()=>{

    return <div >
        <Header />
        <HomePage/>
    </div>;
}
export default App;