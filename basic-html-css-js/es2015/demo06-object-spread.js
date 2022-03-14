
let person={name:'Sanjay', email:'sanjay@gmail.com', age:50, phone:"1223332"};

console.log('person',person);


//what if person joins a organization with all the personal info + empId, salary, and company email (replacing personal email)


//ES5 approach

let emp = {id:1, salary:20000, email:'sanjay@company.com'};
//copy all property from person to emp one by one
emp.name=person.name;
emp.phone=person.phone;
emp.age=person.age;

console.log('emp',emp);


//ES2015 SHORTCUT:

let emp2={
    id:1,
    ...person,    //gets all field of person including name, age, phone and email (personal)

    salary:50000,
    email:'Sanjay@company.com'  //this email value will replace the personal email value
}

console.log('emp2',emp2);





