

class Person{

    static count=0; //a single member to keep a track all person object and give them an id

    static getPeopeCount(){ return Person.count;}

    constructor( name, age){
        this.id=++ Person.count; //increase count and add to id
        this.name=name;
        this.age=age;
    }

    work(){
        console.log(`${this.name} is working`);
    }

    eat(food){
        console.log(`${this.name} is eats ${food}`)
    }   

}


console.log('Person.getPeopeCount()',Person.getPeopeCount());

let p1= new Person("Sanjay",50);
console.log('p1',p1);

let p2= new Person("Shivanshi",15);
console.log('p2',p2);


console.log('Person.getPeopeCount()',Person.getPeopeCount());





