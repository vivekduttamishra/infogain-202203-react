function showPerson(p){
    console.log('Person [ name = '+p.name+",\tage="+p.age+']');
}


let p1= { }
p1.name='Sanjay';
p1.age=45;


showPerson(p1);  //but this not a method of p1 object



p1.show = showPerson;   //we can assign a behavior to a person

//how do I call this show method?


p1.show(p1); 

var p2={name:'Shivanshi', age:15};

p1.show(p2);