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