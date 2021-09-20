
(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            var area = Math.PI * Math.pow(this.radius,2);
                return area;

            // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: "+circle.getArea());
        }
    };
console.log(circle.getArea())
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

//TODO: Finish coding this program. You need to stop the setInterval() method after the showTime() function has run five times


let count = 0;

function showTime() {

    // return new date and time
    let dateTime = new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    count += 1;
if (count>=5){

}
    clearInterval(display);
    //if the count reaches 5, stop the program.

    console.log(time)
}

let display = setInterval(showTime, 5000);
