// How do we create several  person? 
// Each will have  
// Name 
// Age 
// show() 
// eat()

// var p = {
//     persons:[
//         {
//             name: 'Prashant', 
//             age:26, 
//             food: 'Pizza',
//             eat: function() 
//             {
//                 return 'Food='+this.food+'';
//             },
//             show: function(){
//                 return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
//             } 
//         },
//         {
//             name: 'Krushna', 
//             age:29, 
//             food: 'Panear',
//             eat: function() 
//             {
//                 return 'Food='+this.food+'';
//             },
//             show: function(){
//                return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
//             } 
//         },
//         {
//             name: 'Prvin', 
//             age:22, 
//             food: 'Sushi',
//             eat: function() 
//             {
//                 return 'Food='+this.food+'';
//             },
//             show: function(){
//                return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
//             } 
//         },
//         {
//             name: 'Pratik', 
//             age:24, 
//             food: 'Biyani',
//             eat: function() 
//             {
//                 return 'Food='+this.food+'';
//             },
//             show: function(){
//                return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
//             } 
//         },
//     ]
// };

// console.log('Persons Name');
// for(let person of p.persons){
//     console.log('\t',person.show()); 
// }

function createPerson(name, age, food) {

    let person = new Object();
    person.name = name;
    person.age = age;
    person.eat = food;

    person.eats = function () {
        return `${this.eat}`;
    };

    person.show = function () {
        console.log(`Person [Name=${this.name}\tAge=${this.age}\tEats=${this.eats()}]`);
    };

    return person;

};

var people = [
    createPerson("Sanjay", 50, "Lunch"),
    createPerson("Prabhat", 40, "ABC"),
    createPerson('Shivanshi', 15, "PQR"),
];

for (let person of people) {
    person.show();
    // person.eat('Lunch');
};
