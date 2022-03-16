
var list= [ 2, 4.5, 'hello world', new Date(), true ];


list[10]= 100;


console.log('list',list);

for(var i=0; i<list.length; i++)
    console.log(i, list[i]);
