

class Person{

    constructor( name, age){
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


let p= new Person("Sanjay",50);
p.eat('Lunch');