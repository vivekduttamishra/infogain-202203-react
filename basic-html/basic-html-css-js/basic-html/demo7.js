var u=[2,12,"hello",new Date(),"world",125,54];
var Numbers=[];
var Others=[];
for(let i=0;i<u.length;i++){
    if(u[i]==Number){
        Numbers.push(u[i]);
    }
        else
        Others.push(u[i]);

    }
}

console.log(Numbers);
console.log(Others);