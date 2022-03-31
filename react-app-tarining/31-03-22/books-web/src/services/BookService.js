import delay from '../utils/delay';
import axios from './http';



class BookService{

    constructor(){
        this.books=[];
        
    }

    async getAllBooks(){
        let response= await axios.get("books");
        //console.log('getAllbooks response',response);
        return response.data;
    }

    async getBookByIsbn(isbn){
        var response= await axios.get(`books/${isbn}`);
        
        console.log('response',response);
        
        return response.data;
        
    }

    async addBook(book){
       
        if(!book.title) 
            throw new Error("Missing Book title");
        if(!book.author)
            throw new Error("Missing book Author");

        if(!book.isbn)
            throw new Error("Missing book Isbn");

        book.id=book.isbn;              
        console.log('post',book);
        
        const response = await axios.post('books',book);
        console.log('response',response);
        
        return response.data;
            
    }

    async removeBook(isbn){       

        // const headers = { };
        // const str= localStorage.getItem('currentUser');
        // if(str){
        //     let user = JSON.parse(str);
        //     headers.Authorization= `Bearer ${user.token}`;
        // }

        //await axios.delete(`books/${isbn}`,{headers});
        await axios.delete(`books/${isbn}`);
        console.log('book is deleted');
    }

    async updateBook(book){        
        let result =await axios.put(`books/${book.id}`,book);
        return result.data;
    }
}

export default new BookService();

