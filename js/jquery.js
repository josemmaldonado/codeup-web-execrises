"use strict";
var cheatCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
var userInput = '';
$(document).keyup(function (event) {
    console.log(event.key);
    userInput += event.key;
    if (userInput === cheatCode) {
        alert('This is a cheat code for Konami Games');
    }


});

// $('#textfield').keydown(function() {
//     alert('A key was pushed down!');
// });
// $('#textfield').keyup(function() {
//     alert('a key was released!');
// });
//<-left arrow = 37
//right arrow = 39
//up arrow = 38
//down arrow = 40
//char a = 65
//char b =66
//enter = 13
//Cheat code = ArrowUp, ArrowUp, ArrowDown, ArrowDown,ArrowLeft
//ArrowRight,ArrowLeft,ArrowRight,b,a,Enter