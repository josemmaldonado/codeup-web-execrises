"use strict";

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
function analyzeColor(string){
    string = string.toLowerCase();
    var string = prompt("Pick a color?");
    if (string ==="red"){
        alert("All I see is red.");

        }else if (string === "orange"){
        alert("Orange you glad your coding?");

        }else if (string === "yellow") {
        alert("Yellow brick road.");

        }else if (string === "green"){
        alert("Ghetty Green");

        }else if (string === "blue") {
        alert("Your my boy blue");

        } else if (string === "indigo"){
        alert("Maybe indigo ate your baby.");

        }else if (string === "violet"){
        alert("I named my viola violet.")
    }
}



var randomColor = colors[Math.floor(Math.random() * colors.length)];

switch (randomColor){
    case "red":
        console.log("All I see is red when coding.");
        break;
    case "orange":
        console.log("Orange is good vitamin C.")
        break;
    case "yellow":
        console.log("Yellow can be mellow.")
        break;
    case "green":
        console.log("Grass is greener on the coding side.")
        break;
    case "blue":
        console.log("Blue cheese.")
        break;
    case "indigo":
        console.log("New indigo watch?")
        break;
    case "violet":
        console.log("Violet is purple")
        break;
}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */


function calculateTotal(luckyNumber,totalAmount){
    var luckyNumber = Math.floor(Math.random() * 6);
    if (luckyNumber ===0){
        console.log("No discount for you. You pay $"+totalAmount+" .")


    }else if (luckyNumber ===1){
        var luckyNumber = .1;
        var discount = luckyNumber*totalAmount;
        var totalAmount = totalAmount-discount;
        console.log("You won a 10% discount which brings your total amount to $"+totalAmount+" .");
    }else if (luckyNumber ===2){
        var luckyNumber = .25;
        var discount = luckyNumber*totalAmount;
        var totalAmount = totalAmount-discount;
        console.log("You won a 25% discount which brings your total to $"+totalAmount+" .");
    }else if (luckyNumber === 3){
        var luckyNumber = .35;
        var discount = luckyNumber*totalAmount;
        var totalAmount = totalAmount-discount;
        console.log(" You won a 35% discount which brings your total to $"+totalAmount+" .");
    }else if (luckyNumber === 4) {
        var luckyNumber = .5;
        var discount = luckyNumber*totalAmount;
        var totalAmount = totalAmount-discount;
        console.log("You won a 50% discount which brings your total to $"+totalAmount+" .");
    }else if (luckyNumber === 5){
        console.log("You won everything in your cart which brings a total of "+totalAmount+ " that you saved today");
    }
}
/**
 * TODO:
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var enterANumber = confirm("Pick a number. Any number.Please.");
    if (enterANumber = true){
        var numberEntered = prompt("Please enter number and I'll guess what it is?")
        var plusHundo = numberEntered+=100;
        alert("Your number "+numberEntered+" + 100 = "+plusHundo+)

        var isEvenOrOdd = numberEntered /2;
        var numberPositiveOrNegative = numberEntered>0;
        else if (enterANumber!= true){
           prompt("next time")
        }
}
