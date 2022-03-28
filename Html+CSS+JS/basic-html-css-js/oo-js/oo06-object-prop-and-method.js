

var p= {
            name: 'Sanjay', 
            age:45, 
            show: function(){
                console.log('Person [ Name='+this.name+'\tage='+this.age+"]");
            } 
        };


p.eat=function(food){
    console.log(this.name+" eats "+food);
}

p.show();
p.eat('Lunch');

// create a multiple Object

var person=[
    {name:"Roushan",
     age: 27,
     show: function(){
        console.log('Person [ Name='+this.name+'\tage='+this.age+"]");
    } ,
    eat:function(){

    }
    }
]


let c = [
    {
      a: 1,
      b: 2

    },
    {
      a: 3,
      b: 4
    }
    ];
    
    for(item of c){
    //print the whole object individually 
    // console.log('object', item);
    
    //print the value inside the object
    console.log('value', item['a']);
    }