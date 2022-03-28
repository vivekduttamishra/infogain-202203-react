import React from 'react'

function Book() {
  return (
    <div>
        
    <ul>
    <li> <a>Book's Web</a></li>
  <li><a class="active" href="#home">Books</a></li>
  <li><a href="#news">Add Book</a></li>
  <li><a href="#contact">Author</a></li>
  <li><a href="#about">About</a></li>
  <div class="row">
  <input type="text" placeholder="search"/>
    <button>Search</button>
    <button>Guest</button>
</div>
</ul>

   

    
</div>

  )
}

export default Book