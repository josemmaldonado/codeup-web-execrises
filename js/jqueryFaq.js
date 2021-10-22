"use strict";

$(document).ready(function () {
    $('#highlight-important').click(function (event) {
        event.preventDefault();
        $('dt').toggleClass('highlighted');
    });
});
$(document).ready(function () {
    $('#invisible-answers').click(function (event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });
});
$(document).ready(function () {
    $('button').click(function (event) {
        event.preventDefault();
        $('ul').each(function () {
            $(this).children().last().toggleClass('highlighted');
        });
    });
});


$('h3').click(function (event) {
    event.preventDefault();
    $('ul').next().toggleClass("fontWeight", "bold")
            })



// }
// $.ajax("https://hookb.in/Z2rgN2ok3JhK6bmm6bPb",{
//     type:"POST",
//     data:{
//         weekday:"Thorsday",
//         type:"week",
//
//     }
// })
// $.ajax("https://www.themealdb.com/api/json/v1/1/random.php").done(function(data){
//     console.log(data)
// });


//
// $(document).ready(function (){
//     $('#parks').click(function (event){
//         event.preventDefault();
//         $('li').last().each(function (index) {
//         .
//         });
//     });
//     });