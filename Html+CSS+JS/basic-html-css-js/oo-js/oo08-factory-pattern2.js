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

var people= [ 
                createPerson("Sanjay",50),
                createPerson("Prabhat", 40),
                createPerson('Shivanshi',15),
];            
            
for(let person of people){
    person.show();
    person.eat('Lunch');
};






    

    