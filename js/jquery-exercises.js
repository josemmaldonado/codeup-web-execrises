"use strict";

//
// var idContents = $('#id-header').html();
// alert(idContents);
//
//
//
// $('li').css('font-size','20px');
// var contents = $('h1').html();
// alert(contents);
//
// $('li').css('background-color','red');
// $('p').css('background-color','blue');
// $('h1').css('background-color','orange');
// $('li,p,h1').css('background-color','yellow');


$('h1').click(function() {
    $(this).css('background-color','orange');
});


$('p').dblclick(function(e) {
    $(this).css('font-size','18px');
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);