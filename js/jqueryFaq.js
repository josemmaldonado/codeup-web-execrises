"use strict";

$(document).ready(function() {
    $('#highlight-important').click(function(event) {
        event.preventDefault();
        $('dt').toggleClass('highlighted');
    });
});
$(document).ready(function(){
    $('#invisible-answers').click(function(event){
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });
});
