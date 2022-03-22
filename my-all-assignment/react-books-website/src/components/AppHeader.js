import React from 'react'
import '../css/index.css';

function AppHeader() {
    return (
        <div>
            <header>
                <nav id="navbar">
                    <div className="container">
                        <h1 className="book-logo"><a href="/">Book's Web</a></h1>
                        <ul>
                            <li><a href="/" className="current">Home</a></li>
                            <li><a href="/book/add">Add Book</a></li>
                            <li><a href="#">Authors</a></li>
                        </ul>
                        <div className="search-container">
                            <input type="text" placeholder="Search.." className="search"></input>
                            <button type="submit" className="btnsearch">Search</button>
                            <div className="dropdown">
                                {/* <button >Dropdown
                                </button> */}
                                <a href="#" className="dropbtn">Guest</a>
                                <div className="dropdown-content">
                                    <a href="#">Login</a>
                                    <a href="#">Register</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default AppHeader