var booklist=[
    { 
        title:"The Accursed God",
        author:"Vivek Dutta Mishra",
        price: 400,
        cover:"images/blog-1.jpg",
        isbn:85962,
        rating:4 ,
        description:"The best epic book of 2022."


    } ,


    {
        title:"Harry Potter",
        author:"J K Rowling",
        price:500,
        cover:"images/blog-2.jpg",
        isbn:85621,
        rating:5 ,
        description:"This is book 2 of this series."


    } 



];

console.log(booklist);
console.log(typeof(booklist));
// way to push data to arr-obj
booklist.push({ title:"Harry Potter-3",
author:"J K Rowling",
price:500,
cover:"images/blog-3.jpg",
isbn:85521,
rating:3 ,
description:"This is book 3 of this series." });

console.log(booklist);


// way to display data of arr-obj on html page

if(booklist)
  {
    for(let i=0;i<booklist.length;i++)
    {
      let addDiv=document.createElement('div');
      addDiv.className="row";
      var img = document.createElement("img");
      var alink=document.createElement("a");
      img.src = booklist[i].cover;
      addDiv.innerHTML='<div class="col" style="padding: 10px;" ><a href="#"><img height="200px;" width="250px;" src='+img.src+' ></a></div><div class="col" style="padding: 10px;">'+booklist[i].title+'</div><div class="col" style="padding: 10px;">'+booklist[i].author+'</div>';
      document.getElementById("showBooks").appendChild(addDiv);

    }
  }

// form data saving
function saveData(){
    let title,author,price,rating,cover,isbn,desc;
    title=document.getElementById("title").value ;
    
}
