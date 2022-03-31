import React from 'react';
import withTitle from '../utils/withTitle';

const BookAddScreen=({})=>{
    //TODO: Initialize Here

    const [title, setTitle]=React.useState("");

    const [isbn,setIsbn]=React.useState("12345");
    
    const handleSubmit=(e)=>{
        e.preventDefault(); //don't submit to server
       // console.log('title',title);
       // console.log('isbn',isbn);
    }

    const handleIsbnChange=(e)=>{
        
        setIsbn(e.target.value);
    }

    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
    }

    return (
        <div className='book-editor'>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="isbn">ISBN</label>
                <input type="text" className='form-control' 
                       id="isbn" name="isbn" placeholder="ISBN" 
                       value={isbn} onChange={handleIsbnChange}
                       />

                <label htmlFor="title">TITLE</label>
                <input type="text" className='form-control' id="title" name="title" placeholder="TITLE" 
                        value={title} onChange={handleTitleChange}
                />

                <button type="submit" className="btn btn-primary form-control">Add Book</button>
            </form>
        </div>
    );
}

export default withTitle( BookAddScreen, "Add New Book");