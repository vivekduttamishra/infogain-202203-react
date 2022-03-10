

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


