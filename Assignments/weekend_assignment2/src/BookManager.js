export class bkid{
    $oid;
}
export class Book {
     _id  
    isbn;
    title;
    author;
    pages;
    rating; votes; description; tags = []; series; seriesIndex;
    cover; reviews = []


}
export class BookManager
{
    constructor(books)
    {
        this.books=books;
    }
    getAllBooks() {
       
        return this.books;
    };

    Addbook(Book) {
        
        var bk=JSON.stringify(Book);

        this.books.push(JSON.parse(bk));
        
        return this.books;
    };
    RemoveBook(isbn) {
       var nk= this.books.find(a=>a.isbn===isbn);
       this.books.remove(nk);
        return  this.books;
    };
    GetbookDeetails(isbn) {
        
        return this.books.find(a=>a.isbn===isbn);
        
    };
    Searchbookbyauthor(authorname) {
        return this.books.find(a=>a.author===authorname);
    }
    Search(text) {
        this.books.filter( obj => Object.values(obj).some(val => val.includes(text)));
    }
}