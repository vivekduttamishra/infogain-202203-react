

var person={

        name:'Vivek Dutta Mishra',
        address:{
            street:'Haralur Road',
            city:'Bangalore',
            pin:'560102'
        },
        phones:[
            {type:'mobile', number:'3939393993'},
            {type:'home', number:'9939393939'}
        ],
        social:[
            {type:'twitter', id:'vivekdmishra'},
            {type:'instagram',id:'vivekduttamishra'}
        ]
};

console.log('person.name',person.name);
console.log('person.address.city',person.address.city);
console.log('social handles');

//print all social handles of the person
for(let x of person.social){
    console.log('\t',x.type, x.id);
    
}


// How do we create several  person Properties and method





