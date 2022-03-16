var person = {
  name: "John",
  age: 55,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log("person[name]" + person.fullName() + "/lastname" + person.age);
person.eat = function (food, hi) {
  console.log(this.firstName + "eats" + food);
};
person.eat();
person.eat(lunch);
