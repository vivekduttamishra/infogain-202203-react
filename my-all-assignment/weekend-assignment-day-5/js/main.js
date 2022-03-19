let bokDetail = JSON.parse(localStorage.getItem('bookDetails'));

if (!localStorage.getItem('bookDetails')) {
    localStorage.setItem('bookDetails', JSON.stringify([]));
}

function saveBook() {
    let getTitle = document.getElementById('title');
    let getAuthor = document.getElementById('author');
    let getPrice = document.getElementById('price');
    let getRating = document.getElementById('rating');
    let getIsbn = document.getElementById('isbn');
    let getCoverPhoto = document.getElementById('coverphoto');
    let getDesc = document.getElementById('description');

    let title = getTitle.value;
    let author = getAuthor.value;
    let price = getPrice.value;
    let rating = getRating.value;
    let isbn = getIsbn.value;
    let coverphoto = getCoverPhoto.value;
    let description = getDesc.value;

    let bookLocal = localStorage.getItem('bookDetails')

    let bokDetail = JSON.parse(bookLocal);
    bokDetail.push({ 'title': title, 'author': author, 'price': price, 'rating': rating, 'isbn': isbn, 'coverphoto': coverphoto, 'description': description });

    localStorage.setItem('bookDetails', JSON.stringify(bokDetail));
}

bokDetail.map(book => {
    var tr = document.createElement('tr');
    
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    let bookTitle = JSON.stringify(book.title);

    td0.innerHTML = '';
    td1.innerHTML = book.title;
    td2.innerHTML = book.author;
    td3.innerHTML = `<a href="book_detail.html"><input style="background:red;border: 1px solid red; cursor: pointer; width:50%; color:white; border-radius: 2px;" type="button" name=${book.author} id=${bookTitle} value="Details" onclick="bokInDetail(this);"></a>`
    td4.innerHTML = `<input style="background:green; width:50%;color:white; border: 1px solid red; cursor: pointer;  border-radius: 2px;"type="button" id=${bookTitle} value="Delete" onclick="bokDelete(this);">`
    
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    document.getElementById("booktable").appendChild(tr);
})

function bokDelete(book) {
    let books = JSON.parse(localStorage.getItem('bookDetails'));

    var s = book.parentNode.parentNode;
    s.parentNode.removeChild(s);
    let getTitle = book.id;
    let delBook = books.filter(bok => bok.title != getTitle);
    localStorage.setItem('bookDetails', JSON.stringify(delBook));
}

function bokInDetail(book) {
    let getTitle = book.id;
    let getBook = bokDetail.filter(bok => bok.title == getTitle);
    localStorage.setItem('getBook', JSON.stringify(getBook));
}
