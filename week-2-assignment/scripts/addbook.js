function addBookToList() {
  const bookManger = new BookManager();
  let bookData = {
    isbn: document.getElementById("isbn").value,
    title: document.getElementById("titile").value,
    author: document.getElementById("author").value,
    price: document.getElementById("price").value,
    rating: document.getElementById("rating").value,
    description: document.getElementById("description").value,
    cover: document.getElementById("cover").value,
  };
  bookManger.addbook(bookData);
}
