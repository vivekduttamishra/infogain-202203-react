
var arr = []
function addToList() {
    var ul = document.getElementById("numberList");
    var inputValue = document.getElementById("myInput");
    var li = document.createElement("li");
    li.setAttribute('id', inputValue.value);
    if (inputValue.value.length == 1) {
        document.getElementById("error").innerText = ""
        arr.push(inputValue.value)
        li.appendChild(document.createTextNode(inputValue.value));
        ul.appendChild(li);
    } 
    

    console.log("array is ", arr)
    document.getElementById("myInput").value = ""
}

function add() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var element = parseInt(arr[i])
        console.log("element is", element)
        sum = sum + element
    }
    // console.log("sum is ", sum)
    document.getElementById("sum1").innerText = "Sum is :" + sum

}

function avg() {
    var sum1 = 0;
    for (var i = 0; i < arr.length; i++) {
        var element = parseInt(arr[i])
        // console.log("element is", element)
        sum1 = sum1 + element
    }
    console.log("sum is ", sum1)
    var average = sum1 / arr.length

    console.log("average ", average)
    document.getElementById("avg1").innerText = "Average is :" + average

}

function findMinValue() {
    arr.sort(function (a, b) { return a - b });
    var minValue = arr[0]
    // console.log("minValue is", minValue)
    document.getElementById("minval").innerText = "Minimum value is :" + minValue
}

function removeList() {
    var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
function removeAll1() {
    var lst1 = document.getElementsByTagName("ul");
    lst1[0].innerHTML = "";
    document.getElementById("sum1").innerText = ""
    document.getElementById("avg1").innerText = ""
    document.getElementById("minval").innerText = ""
    document.getElementById("error").innerText = ""
}

function resetCal() {
    location.reload();

}



