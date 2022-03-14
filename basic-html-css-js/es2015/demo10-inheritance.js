


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



class Employee extends Person{


    constructor(id, name, age, salary){
        super(name,age); //calls Person constructor

        this.id=id;
        this.salary=salary;
    }

    work(){
        console.log(`${this.name} works for a salary of ${this.salary}`);
    }

}


const emp=new Employee(1,"Sanjay",50, 50000);

console.log('emp.Name',emp.Name);  //inherited property Name and Age

console.log('emp.Age',emp.Age);

emp.work();  //newly added method that uses inherited name and new salary

console.log('emp instanceof Employee',emp instanceof Employee);
console.log('emp instanceof Person',emp instanceof Person);
console.log('emp instanceof String',emp instanceof String);
console.log('emp instanceof Object',emp instanceof Object);






