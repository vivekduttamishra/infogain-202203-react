  function average() {
    var length = arguments.length;
    var sum =0;
    for(var i =0; i<length;i++){
        sum = sum+arguments[i];
    }
    return sum/length;
}
console.log(average(2,3,9,8,11,4,2))

