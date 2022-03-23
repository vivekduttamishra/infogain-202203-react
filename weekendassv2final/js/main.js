let bookDetail =JSON.parse(localStorage.getItem('bookDetails')); //json.parse converts localstorage in string kV pair

if(!localStorage.getItem('bookDetails')){  //if empty localstorage

    localStorage.setItem('bookDetails', JSON.stringify([])); //then empty set 
}

// now save form data on submit
function saveBook(){
    //selecting id from form dom
    let getTitle = document.getElementById('title');
    let getAuthor = document.getElementById('author');
    let getCoverPhoto = document.getElementById('cover');
    let getPrice = document.getElementById('price');
    let getRating = document.getElementById('rating');
    let getIsbn = document.getElementById('isbn');
    let getDesc = document.getElementById('description');

//selecting values from form
let title = getTitle.value;
    let author = getAuthor.value;
    let coverphoto = getCoverPhoto.value;
    let price = getPrice.value;
    let rating = getRating.value;
    let isbn = getIsbn.value;
    let description = getDesc.value;

    //local book arr
    let bookLocal = localStorage.getItem('bookDetails')
    let bookDetail = JSON.parse(bookLocal);
    
    bookDetail.push({
        
        'title': title,
        'author': author, 
        'coverphoto': coverphoto,
        'price': price, 
        'rating': rating,
        'isbn': isbn, 
        'description': description 
        });
    //setting above array 
    localStorage.setItem('bookDetails', JSON.stringify(bookDetail));

}


bookDetail.map(book => {
    var tr = document.createElement('tr');
    
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    let bookTitle = JSON.stringify(book.title);

    td0.innerHTML = '<img src="'+book.coverphoto+'"height="200px" width="150px" />'
    td1.innerHTML = book.title;
    td2.innerHTML = book.author;
    td3.innerHTML = `<a href="bookDetails.html">
    <input style="background:blue;border: 1px solid blue; cursor: pointer; width:90%; text-align:center; color:white; border-radius: 2px;" type="button" 
    name=${book.author} id=${bookTitle} value="Details" onclick="bookInDetail(this);">
    </a>`
    td4.innerHTML = `<input style="background:red; width:90%;color:white; text-align:center; border: 1px solid red; cursor: pointer;  border-radius: 2px;"type="button" id=${bookTitle} value="Delete" onclick="bookDelete(this);"><hr/>`
    
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    document.getElementById("booktable").appendChild(tr);
})

function bookDelete(book) {
    let books = JSON.parse(localStorage.getItem('bookDetails'));

    var s = book.parentNode.parentNode;
    s.parentNode.removeChild(s);
    let getTitle = book.id;
    let delBook = books.filter(bok => bok.title != getTitle);
    localStorage.setItem('bookDetails', JSON.stringify(delBook));
}

function bookInDetail(book) {
    let getTitle = book.id;
    let getBook = bookDetail.filter(book => book.title == getTitle);
    localStorage.setItem('getBook', JSON.stringify(getBook));
}

function searchBook(book){
    let inputValue=document.getElementById("link_id").value;
    for(let i=0;i<book.length;i++){
        if(inputValue==book.title)
        localStorage.setItem('getBook',JSON.stringify(getBook));
        else
        alert("book not found");
    }
}