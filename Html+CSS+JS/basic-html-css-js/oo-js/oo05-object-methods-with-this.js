function showPerson(){
    console.log('Person [ name = '+this.name+",\tage="+this.age+']');
}




let p1= { }
p1.name='Sanjay';
p1.age=45;
p1.show = showPerson;   //we can assign a behavior to a person

//how do I call this show method?


p1.show(); 


var p2={name:'Shivanshi', age:15, show:showPerson};
p2.show();



var name="Vivek";
var age= 1000;

showPerson();