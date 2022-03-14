



function Person( name, age){
    this.name=name;
    this.age=age;
}

Person.prototype.work=function(){
    console.log(`${this.name} is working`);
}

Person.prototype.eat=function(food){
    console.log(`${this.name} is eats ${food}`)
}   




let p= new Person("Sanjay",50);
p.eat('Lunch');