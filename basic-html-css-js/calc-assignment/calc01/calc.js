
var numberTextBox= document.getElementById('number');
var numberList=document.getElementById('numberList');
var consoleDiv=document.getElementById('console');
var numbers=[];
var doAddToList=function(){
    var value= numberTextBox.value;

    var number= + value; // '+' automatically tries to convert value to number
    if(isNaN(number)){
        consoleDiv.innerHTML+=("<p class='error'> Invalid Input: "+value+"</p>");
    } else {
        numberList.innerHTML+=("<li>"+number+"</li>");
        numbers.push(number);
    }
    
}

var doSum=function(){
    var result=0;
    for(var number of numbers)
        result+=number;

    consoleDiv.innerHTML+=("<p> sum is : "+result+"</p>");
}

var doAverage=function(){
    var result=0;
    for(var number of numbers)
        result+=number;

    var average=result/numbers.length;
    consoleDiv.innerHTML+=("<p> Average is : "+average+"</p>");
}

var clearUI=function(){
    console.log('clear function is called');
    numberTextBox.value='';
    numberList.innerHTML='';
    consoleDiv.innerHTML='';
}

var reset=function(){
    clearUI();        //clear UI
    numbers=[];     //clear internal memory
}

var refreshList=function(){
    numberList.innerHTML='';

    for(var number of numbers)
        numberList.innerHTML+=("<li>"+number+"</li>");

}