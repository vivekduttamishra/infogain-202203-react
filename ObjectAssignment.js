var p = {
    persons:[
        {
            name: 'Poonam', 
            age:19, 
            show: function(){
                console.log('Person [ Name='+this.name+'\tage='+this.age+"]");
            } 
        },
        {
            name: 'Neha', 
            age:20, 
            show: function(){
                console.log('Person [ Name='+this.name+'\tage='+this.age+"]");
            } 
        },
        {
            name: 'kajal', 
            age:21, 
            show: function(){
                console.log('Person [ Name='+this.name+'\tage='+this.age+"]");
            } 
        },
       
        
    ]
};

console.log('person.name',p.persons.name);
console.log('social handles');
for(let per of p.persons){
    console.log('\t',per.show());
    
}



