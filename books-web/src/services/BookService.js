
import dummyBooks from '../data/books';
import delay from '../utils/delay';

class BookService{

    constructor(){
        this.books=null;
        this._loadBooks();
    }
    _loadBooks(){
        
        try{
            let bookJSON=localStorage.getItem("books");
            this.books=JSON.parse(bookJSON);
        }catch(error){

        }
        if(!this.books){
           this.books=dummyBooks;
           this._saveBooks();
        }
    }
    _saveBooks(){
        localStorage.setItem("books",JSON.stringify(this.books));
    }
    async getAllBooks(){
        console.log('books',this.books);
        await delay(2000);
        return this.books;
    }
    async getBookByIsbn(isbn){
        await delay(2000);
        return this.books.find(b=>b.isbn === isbn);
    }

    async addBook(book){
        await delay(2000);
        if(!book.title) 
            throw new Error("Missing Book title");
        if(!book.author)
            throw new Error("Missing book Author");

        if(!book.isbn)
            throw new Error("Missing book Isbn");
        this.books.push(book);
        this._saveBooks();         
            
    }
}

export default new BookService();

