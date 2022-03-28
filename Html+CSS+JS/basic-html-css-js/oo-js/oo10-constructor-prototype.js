// how to create many 'Person'

function Employee(name, id,salary){

    this.name=name;
    this.id=id;
    this.salary=salary;

    this.toString= function(){
        return (`Employee [Name=${this.name}\tId=${this.id}\tSalary:${this.salary}]`);
    };

    //return person;

};


var employees= [ 
                new Employee("Sanjay",1,50000),
                new Employee("Prabhat", 2,40000),
                new Employee('Shivanshi',3, 4000),
];            
           

Employee.prototype.work=function(project){
    console.log(`${this.name} works on ${project}`);
};




for(let employee of employees){
    console.log(""+employee) ; //calls toString()
    employee.work('Training');
};






    

    