var numVal = document.getElementById("number");
var numList = document.getElementById("numberList")
var resultConsole = document.getElementById("console");
var numbers = []

var addToList = function () {
    var takeNum = numVal.value;
    var number = +takeNum;

    var li = document.createElement("li");
    li.innerText = number;

    if (Number.isInteger(number)) {
        numList.appendChild(li);
        numbers.push(number);
    } else {
        resultConsole.innerHTML += ("<p class='error'> Invalid Input: " + value + "</p>");
    }
}

var sum = function () {
    var clearConsole = document.getElementById("console");

    const listNumber = [].slice.call(document.querySelectorAll('#numberList li'))
    const sum = listNumber.reduce(function (sum, el) {
        return sum + parseFloat(el.innerText)
    }, 0)

    resultConsole.innerText = "Sum of Num:" + sum;

    if (clearConsole.style.display === "none") {
        clearConsole.style.display = "block";
    }

}

var averageNum= function () {
    const listNumber = [].slice.call(document.querySelectorAll('#numberList li'))

    const sum = listNumber.reduce(function (sum, el) {
        return sum + parseFloat(el.innerText)
    }, 0)

    var total = sum / listNumber.length;

    resultConsole.innerText = "Average:" + total;
}

var findMinofValue = function () {
    numbers.sort(function (a, b) { return a - b });
    var minValue = numbers[0];

    resultConsole.innerText = "Min value:" + minValue;
}

var clearDisplays = function () {
    if (numList.style.display === "block" && resultConsole.style.display === "none") {
        numList.style.display = "block";
        resultConsole.style.display = "block";
    } else {
        numList.style.display = "none";
        resultConsole.style.display = "none";
    }
}

function resetCall() {
    numList.innerHTML = "";
    numVal.value = "";
    resultConsole.innerHTML = "";
    numbers = [];
}

function lstRefresh() {
    if (numList.style.display === "none") {
        numList.style.display = "block";
    }
}