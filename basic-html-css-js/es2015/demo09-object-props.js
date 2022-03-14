


class Person{
    constructor( name, age){
        
        this.Name=name;
        this.Age=age;
    }

    get Name(){
        return this.name;
    }   
    set Name(value){
        if(value.length<2)
            throw new Error("Invalid value. Name must be at least 2 chars");
        this.name=value;
    }

    get Age(){
        return this.age;
    }

    set Age(value){
        if(isNaN(value) || value<0) 
            throw new Error("Invalid age. Must be age >= 0")

        if(value<this.age)
            throw new Error(`${this.name} can't get younger now`);

        this.age=value;
    }
}




p=new Person("Sanjay",50);

console.log('p',p);

p.Age=55; //It appears alright

console.warn('p',p);

p.Age=40; 

console.log('p',p);

