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
        alert("Your my boy blue; ");

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

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber,totalAmount){
   var afterDiscount = totalAmount*
    if (luckyNumber ===0){
        console.log("No discount for you. You pay $"+totalAmount+" .")


    }else if (luckyNumber ===1){
        console.log("You won a 10% discount which brings your total amount to $"+totalAmount+" .")
    }else if (luckyNumber ===2){
        console.log("You won a 25% discount which brings your total to ")
    }else if (luckyNumber === 3){
        console.log(" You won a 35% discount what brings your total to ")
    }else if (luckyNumber === 4) {
        console.log("You won a 50% discount which brings your total to ")
    }else if (luckyNumber === 5){
        console.log("You won everything in your cart.")
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

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