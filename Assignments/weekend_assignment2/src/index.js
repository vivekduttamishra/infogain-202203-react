import {BookManager,Book,bkid} from './BookManager'
import {data,table,books,addbokdt,homedt,addbook,savebtn} from './datavariable'
//console.log("Hi Ram")
//console.log(greet("Webpack"));
var bm=new BookManager(books);
var bkks=bm.getAllBooks();
for (var i = 0; i < bkks.length; i++) {
    //console.log(Math.random().toString(16).slice(2) + " --row1")
    var tbodyRef = table.getElementsByTagName("tbody")[0];
    var newRow = tbodyRef.insertRow();
    var newCell1 = newRow.insertCell();
    var newCell2 = newRow.insertCell();
    var newCell3 = newRow.insertCell();
    var newCell4 = newRow.insertCell();
    newCell1.appendChild(document.createTextNode(''));
    newCell2.appendChild(document.createTextNode(bkks[i].title));
    newCell3.appendChild(document.createTextNode(bkks[i].author));
    var bkh="";
    if(bkks[i]._id.$oid ==undefined){
    var bh= bkks[i]._id;
    bkh=bh.$iod;        
    console.log(bh.$iod);
    }
    else{
    bkh=bkks[i]._id.$oid;
    }
    newCell4.innerHTML = '<a href="#" onclick="viewdata(\'' + bkks[i].isbn + '\')"> Delete Details</a>';

}
homedt.addEventListener("click", () => {
   
    document.getElementById("viewbook").style.display = 'none';
    document.getElementById("tbldt").style.display = 'block';
    document.getElementById("addbook").style.display = 'none';
})
addbokdt.addEventListener("click", () => {
    
    document.getElementById("viewbook").style.display = 'none';
    document.getElementById("tbldt").style.display = 'none';
    document.getElementById("addbook").style.display = 'block';
})
savebtn.addEventListener("click", () => {
    document.getElementById("viewbook").style.display = 'none';
    document.getElementById("tbldt").style.display = 'block';
    document.getElementById("addbook").style.display = 'none';
    var bk=new Book();
    console.log("Book Save Object Created")
    
    var bid=new bkid();
    bid.$iod=Math.random().toString(16).slice(2);
    bk._id=bid;
    bk.author=document.getElementById("author").value;
    bk.isbn=document.getElementById("isbn").value;
    bk.title=document.getElementById("title").value;
    bk.cover=document.getElementById("cover").value;
    bk.description=document.getElementById("description").value;
    bk.rating=document.getElementById("rating").value;

//alert(bk)
var bks=bm.Addbook(bk);
//alert(bks);
localStorage.setItem("books", JSON.stringify(bks));
if(bks)
{
    table.getElementsByTagName("tbody")[0].innerHTML='';
    for (var i = 0; i < bks.length; i++) {
        //console.log(bks[i])
        var tbodyRef = table.getElementsByTagName("tbody")[0];
        var newRow = tbodyRef.insertRow();
        var newCell1 = newRow.insertCell();
        var newCell2 = newRow.insertCell();
        var newCell3 = newRow.insertCell();
        var newCell4 = newRow.insertCell();
        var newCell5 = newRow.insertCell();
        newCell1.appendChild(document.createTextNode(''));
        newCell2.appendChild(document.createTextNode(bks[i].title));
        newCell3.appendChild(document.createTextNode(bks[i].author));
        var bkh="";
        if(bkks[i]._id.$oid ==undefined){
        var bh= bkks[i]._id;
        bkh=bh.$iod;
        console.log(bh.$iod);
        }
        else{
    bkh=bkks[i]._id.$oid;
        }
        newCell4.innerHTML = '<a href="#" onclick="viewdata(\'' + bks[i].isbn + '\')"> View Details</a>';
        newCell5.innerHTML =  '<a href="#" onclick="Removebook(\'' + bks[i].isbn + '\')"> Delete Details</a>';
    
    }
}
 });
 function viewdata(id) {
    document.getElementById("viewbook").style.display = 'block';
    document.getElementById("tbldt").style.display = 'none';
    document.getElementById("addbook").style.display = 'none';
    var item = search(id);
    if (item) {
        var html = ' <div class="col-md-4"> ' +
            ' <div class="aspect">  <img src="' + item.cover + '"  /> </div>' +
            '</div>' +
            '<div class="col-md-8">' +
            '<h2><a>' + item.title + '</a></h2> <br />' +
            ' <span> ' + item.author + ' </span><br />' +
            '<span>Price:' + item.price + '</span><br />' +
            '<span>Rating:' + item.rating + '</span><br />' +
            '<b>Description:</b><br />' +
            '<span>' + item.description + '</span>' +
            '</div>';
        document.getElementById("viewbook").innerHTML = html;
    }
    console.log(item)
}
