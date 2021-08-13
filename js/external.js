"use strict";
console.log("Hello From External!");


var userInput = prompt("What is your favorite color?: ");

console.log("Great, "+userInput+" is my favorite color too!");

var mermaid = 3;
var bear = 5;
var hercules = 1;

var  videoRental= (mermaid+=bear+=hercules) * 3;
    console.log(" "+videoRental+" .");
var googlePay= 400;
var googleHoursWorked = prompt( "How many hours did you work for google?")
console.log("At 400 an hour you should be getting "+googleHoursWorked*googlePay+" .")

var amazonPay= 380;
var amazonHoursWorked = prompt("How many hours did you work for amazon?")
console.log("At 380 an hour you should be getting "+amazonHoursWorked*amazonPay+" .")

var facePay= 350;
var  faceHoursWorked = prompt(" How many hours did you work for facebook?")

console.log("At 350 an hour you should be getting "+facePay*faceHoursWorked+" .")


var totalPayment = googleHoursWorked+amazonHoursWorked+faceHoursWorked
    console.log("Total payment you shall demand is "+totalPayment+ " please.");


var classFull = false;
var scheduleConflict=false;

var studentEnrollment= !classFull&&!scheduleConflict;






