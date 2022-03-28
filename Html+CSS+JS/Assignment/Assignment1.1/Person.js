var p = {
    persons:[
        {
            name: 'Roushan', 
            age:26, 
            // food: 'Pizza',
            eat: function() 
            {
                // return 'Food='+this.food+'';
                food= 'Burger'
            },
            show: function(){
                return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
            } 
        },
        {
            name: 'Daniel', 
            age:29, 
            food: 'Pizza',
            eat: function() 
            {
                return 'Food='+this.food+'';
            },
            show: function(){
               return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
            } 
        },
        {
            name: 'Sam', 
            age:22, 
            food: 'French Fry',
            eat: function() 
            {
                return 'Food='+this.food+'';
            },
            show: function(){
               return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
            } 
        },
        {
            name: 'Denish', 
            age:24, 
            food: 'Paradise Biryani',
            eat: function() 
            {
                return 'Food='+this.food+'';
            },
            show: function(){
               return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
            } 
        },
    ]
};

// console.log('person.name',p.persons.eat);
console.log('Persons Name');
for(let person of p.persons){
    console.log('\t',person.show()); 
}
