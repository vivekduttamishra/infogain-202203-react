var booklist=[
    { 
        title:"The Accursed God",
        author:"Vivek Dutta Mishra",
        price: 400,
        cover:"images/accgod.webp",
        isbn:85962,
        rating:4 ,
        description:"The best epic book of 2022."


    } ,


    {
        title:"Alchemist",
        author:"Paulo Chelo",
        price:500,
        cover:"images/blog-1.jpg",
        isbn:85621,
        rating:5 ,
        description:"Great Book about life prespective."


    } 



];

console.log(booklist);
console.log(typeof(booklist));
// way to push data to arr-obj
booklist.push({ title:"Man's Search For Meaning",
author:"Viktor E. Frankl",
price:500,
cover:"images/blog-7.jpg",
isbn:85521,
rating:3 ,
description:"The classic tribute to hope from the holocaust." });

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