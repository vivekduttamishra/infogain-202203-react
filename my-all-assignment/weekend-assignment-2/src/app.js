import { saveBook, getBooks, bokDelete } from "./utils/addbook";

class bookManager {

    addBook() {
        document.getElementById("addbook").addEventListener("click", saveBook);
    }   

    getAllBooks() {
        getBooks();
    }

    removeBook() {
        bokDelete();
     }
}

let book = new bookManager();
book.addBook();
book.getAllBooks();
book.removeBook();



