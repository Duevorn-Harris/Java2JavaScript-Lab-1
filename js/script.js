" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function oneToTen() {
  var oneToTen = "*** Output ***" + "<br>";
    for (var i = 1; i <= 10; i++) {
        oneToTen += i + "<br>";
        display.innerHTML = oneToTen;
    }
}

function oneToTwentyOdd() {
    var oneToTwenty = "*** Output ***" + "<br>";
    for (var i = 1; i <= 20; i += 2) {
        oneToTwenty += i + "<br>";
    }
  display.innerHTML = oneToTwenty;
}

function numbersSquared() {
    var squaredNumbers = "*** Output ***" + "<br";
    for (var i = 1; i <= 10; i++) {
        squaredNumbers += (i * i) + "<br>";
    }
  display.innerHTML = squaredNumbers;
}

function randomNumbers() {
    var formattedRandomNumbers = "*** Output ***" + "<br>";
    var loopRandomNumber = Math.random(10);
    for (var i = 0; i < 4; i++) {
        var randomNumberForLoop = loopRandomNumber;
        formattedRandomNumbers += randomNumberForLoop + "<br>";

    }
    display.innerHTML = formattedRandomNumbers;
}

function evenIntegersLessThanN() {
    var lessthanN = "*** Output ***" +"<br>";
    var n = 20;
    for (var i = 2; i < n; i += 2) {
        lessthanN += i + "<br>";
    }
    display.innerHTML = lessthanN;
}

function powersOfTwoUpToN() {
    var powerOfTwo = "*** Output ***" + "<br>";
    var n = 8;
    for (var i = 1; i <= n; i++) {
        powerOfTwo += Math.pow(2, i) + "<br>";
    }
    display.innerHTML = powerOfTwo;
}

function areWeThereYet(ans) {
var ans = prompt("Are we there yet?");

    if(ans === "Yes"){
        display.innerHTML = "Good!";
    } else{
        display.innerHTML = "Are we there yet?";
    }
}

function printStarPattern() {
    var starPatten = "*** Output ***\n" + "<br>";
    for(var x = 1; x <= 5; x++) {
        for (var i = 0; i < x; i++) {
            starPatten += "*";
        }
        starPatten += "<br>";
    }
    display.innerHTML = starPatten;
}

function printFourByFourTable() {
    var tablePatten = "*** Output ***\n";
    for(var x = 1; x <= 4; x++) {
        for (var i = 1; i <= 4; i++) {
            tablePatten += ((i * x) + " ");
        }
        tablePatten += "<br>";
    }
    display.innerHTML = tablePatten;
}

function nxnTableSquare() {
    var tablePatten = "*** Output ***\n";
    var n = 5;
    for(var x = 1; x <= n; x++) {
        for (var i = 1; i <= n; i++) {
            tablePatten += ((i * x) + " ");
        }
        tablePatten += "<br>";
    }
    display.innerHTML = tablePatten;
}
