
function Persons(name, age, food) {

    let persons = new Object();
    persons.name = name;
    persons.age = age;
    persons.eat = food;

    persons.eats = function () {
        return `${this.eat}`;
    };

    persons.show = function () {
        console.log(`Persons [Name=${this.name}\tAge=${this.age}\tEats=${this.eats()}]`);
    };

    return persons;

};

var NewPerson = [
    Persons("Sanjay", 50, "Lunch"),
    Persons("Prabhat", 40, "ABC"),
    Persons('Shivanshi', 15, "PQR"),
];

for (let person of NewPerson) {
    person.show();
   
};
