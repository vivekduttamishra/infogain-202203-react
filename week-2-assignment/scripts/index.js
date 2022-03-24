const bookmanager = new BookManager();

function removeBook(isbn) {
  bookmanager.removeBook(isbn);
}

function searchByAuthor() {
  const searchValue = document.getElementById("search-text").value;
  bookmanager.getBookByAuthor(searchValue);
}
document.body.onload = function () {
  bookmanager.getBooks();
};
