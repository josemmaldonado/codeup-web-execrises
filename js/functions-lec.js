"use strict";

console.log("Welcome to functions");


function sayHello() {
    console.log("Hello!");

}

sayHello();
//anonymous function
var sayHowdy = function(){
    console.log("Howdy");
}

sayHowdy();

//arguments and parameters-placeholder

function add(x,y){
    return x+y;
}

console.log("add(2,3) " + add(2, 3));

function subtract(x,y){
    return x-y;
}
// Scope
var instructor = "Douglas";
var day = "Friday";

function tellTheDay(){
  //local scope overides global scope
    //local scope - can not  pull something from a local scope
    //if you define a var within a local scope, you can reuse the name
    return "Tell "+instructor+ " it's "+day+" !";
}
function greeting(){
    var userName = "Kenneth";
    return "Hi "+ userName;

}

console.log(greeting());




function checkDay(){
    var day = "Monday";
    return day;
}

console.log("Its "+checkDay());


//Immediately-Invoked function expression(IIFE)
var raduis = 5;
var area = Math.PI * Math.pow(raduis, 2);
console.log(area)
var LIMIT = 10;

for (var row = 1; row <= LIMIT/2; row++)
{
    for (var space = 1; space <= (LIMIT/2)-row; space++)
    console.log(" ");

    for (var star = 1; star <= (row*2)-1; star++)
    console.log("*");


}

// Print bottom half of diamond
for (int row = 1; row <= LIMIT/2; row++)
{
    for (int space = 1; space <= row-1; space++)
    System.out.print (" ");

    for (int star = 1; star <= LIMIT-(row*2)+1; star++)
    System.out.print ("*");

    System.out.println();
}
