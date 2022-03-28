var showPerson= function (p){
    console.log('Name',p.name);
    console.log('Age',p.age);
    console.log();
}


//Approach #1 Creating Object using 'new'
var p= new Object();
p.name="Sanjay";
p.age=40;
showPerson(p);


//Approach #2   using {}  as a replacement for 'new'
var p2 =  {}  ;  //shortcut for  new Object()
p2.name="Shivanshi";
p2.age=16;
showPerson(p2);


//Approach #3  Javascript Object Notation to create and initialize

var p3={    //create a new object and set below properties

    name : 'Prabhat',
    age : 35
};

showPerson(p3);


//Approach #4  Dictionary Notation 
//Each property can be considered as a key in dictionary

var p4={};

p4["name"]="Avishek";  //same as p4.name
p4.age=50;  // we can use mixed notations

console.log('p4.name',p4.name);    //dictionary keys can be used in dot notation
console.log('p4["age"]',p4["age"]); //properties can be acceed in dictionary notation


