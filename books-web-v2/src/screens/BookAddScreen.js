import React from 'react';
import withTitle from '../utils/withTitle';

const BookAddScreen=({})=>{
    //TODO: Initialize Here
    

    return (
        <div className='BookAddScreen'>
            
            <form>
                <label for='title'>ISBN</label>
                <input type='text' id='isbn' class='form-control' placeholder='isbn'/>
                <label for='title'>Title</label>
                <input type='text' id='title' class='form-control' placeholder='title'/>
                <label for='title'>Author</label>
                <input type='text' id='author' class='form-control' placeholder='author'/>
                <label for='title'>Price</label>
                <input type='text' id='price' class='form-control' placeholder='price'/>
                <label for='title'>cover</label>
                <input type='text' id='cover' class='form-control' placeholder='cover'/>
                <label for='title'>Description</label>
                <input type='text' id='description' class='form-control' placeholder='description'/>

            </form>
            <button type='submit' class="btn btn-primary">Save</button>
            
        </div>
    );
}

export default withTitle( BookAddScreen, "Add New Book");