// how to create many 'Person'

function createPerson(name, age){

    let person= new Object();
    person.name=name;
    person.age=age;

    person.show= function(){
        console.log(`Person [Name=${this.name}\tAge=${this.age}]`);
    };

    person.eat=function(food){
        console.log(`${this.name} eats ${food}`);
    };


    return person;

};

var p1= createPerson("Sanjay",50);
var p2= createPerson("Prabhat", 40);

p1.show();
p1.eat('Fruits');

p2.show();
p2.eat("Dinner");




    

    