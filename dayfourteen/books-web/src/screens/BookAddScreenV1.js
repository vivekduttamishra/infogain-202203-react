import React from 'react';
import withTitle from '../utils/withTitle';
import InputField from '../components/InputField';

const BookAddScreen=({})=>{
    //TODO: Initialize Here
    var [book,setBook]=React.useState({
        isbn:'',
        title:'',
        author:'',
        cover:'',
        price:0,
        rating:0,
        description:''
    });

    const handleFieldChange=(name, value)=>{

        var b={...book};
        b[name]=value;
        setBook(b);

    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('book',book);
        
    };
  
    return (
        <div className='book-editor'>
            
            <form onSubmit={handleSubmit}>
               <InputField name="isbn" value={book.isbn} onChange={handleFieldChange}/>
               <InputField name="title" value={book.title} onChange={handleFieldChange} />
               <InputField name="author" value={book.author} onChange={handleFieldChange} />
               <button className="btn btn-primary form-control" type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default withTitle( BookAddScreen, "Add New Book");