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
function tellFortune(x,y,z,a){
    var x = typeof number;
    var y = typeof String;
    var z = typeof String;
    var a = typeof String;
    return x,y,z,a;
}

function calulateDogAge(dogAge){
    var dogAge = dogAge*=7;
    return ("Your doggie is "+dogAge+ " yours old in dog years")
}