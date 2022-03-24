function getsum (){
return Array.from(arguments).reduce((sum,value)=>{
    if (Array.isArray(value)){
        sum += getsum.apply(this, value)
        } else {
            sum += Number(value)
        }
        return sum
    }, 0)
}
var sum = getsum (1,'1','3',[2,'2','10']);
console.log(sum);