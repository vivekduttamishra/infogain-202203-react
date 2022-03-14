// How do we create several  person? 
// Each will have  
// Name 
// Age 
// show() 
// eat()

var p = {
    persons:[
        {
            name: 'Prashant', 
            age:26, 
            // food: 'Pizza',
            eat: function() 
            {
                // return 'Food='+this.food+'';
                food= 'Pizza'
            },
            show: function(){
                return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
            } 
        },
        {
            name: 'Krushna', 
            age:29, 
            food: 'Panear',
            eat: function() 
            {
                return 'Food='+this.food+'';
            },
            show: function(){
               return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
            } 
        },
        {
            name: 'Prvin', 
            age:22, 
            food: 'Sushi',
            eat: function() 
            {
                return 'Food='+this.food+'';
            },
            show: function(){
               return 'Name='+this.name+'\tage='+this.age+' '+this.eat()+'';
            } 
        },
        {
            name: 'Pratik', 
            age:24, 
            food: 'Biyani',
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
// console.log('Food Name');
// for(let person of p.persons){
//     console.log('\t',person.eat()); 
// }