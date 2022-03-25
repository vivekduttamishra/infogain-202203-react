import React from 'react';
import If from '../components/If';
import BookDetails from '../components/BookDetails';
import books from '../data/books';

const BookList = ({ books,onSelectBook }) => {


    return (
        <div className="list-group">

            {books.map(book=>(
                <button type="button"
                    onClick={()=>onSelectBook(book)}
                    key={book.isbn} 
                    className="list-group-item list-group-item-action">
                    {book.title}
                </button>
            ))}
            
            
        </div>
    )

};

class BookManageScreen extends React.Component {

    state = {
        selectedBook: books[0]  //in the beginining no book is selected.
    };

    render = () => {

        return (
            <div className='BookListScreen'>
                <h1>Manage Books</h1>
                <div className="row">
                    <div className="list col col-3">
                        <h3>Book List</h3>
                        <BookList books={books}  onSelectBook={book=>this.setState({selectedBook:book})} />
                    </div>
                    <div className="col col-9">
                        {this.state.selectedBook
                            ? <BookDetails book={this.state.selectedBook} />
                            : <p>Please select a book</p>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default BookManageScreen;