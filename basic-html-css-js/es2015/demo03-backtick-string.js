

let title="The Accurs God";
let author="Vivek Dutta Mishra"
let rating=4.5;
let price=399;

//ES5 report

let description= "Title  :\t"+title+"\n" +
                 "Author :\t"+author+"\n"+
                 "Rating :\t"+rating+" / 5\n"+
                 "Price  :\t Rs "+price+"\tafter 20% discount Rs "+Math.floor((price*0.8));


console.log(description);


//ES 2016

let description2= `
Title:  ${title}
Author: ${author}
Rating: ${rating} /5
Price:  Rs. ${price}    after 20% discount Rs ${Math.floor((price*0.8))}
`;

console.log(description2);