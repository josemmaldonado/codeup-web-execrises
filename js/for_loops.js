console.log("Snoop a loop, bring your green hat.");


var number = 0;

function showMultiplicationTable(number) {
    var i = 0;
    do {
        var multiply = number * i;
        console.log(" " + number + " x " + i + " = " + multiply + " ");
        i++;
    } while (i <= 10);
}

function oddEven(x) {

}

function numberRows(x) {
    var rows = x;
    var space = "";
    for (var i = 1; i <= rows; i++) {
        for (var j = 1; j <= i; j++) {
            console.log(j += space);
        }

    }
    // console.log(space )
}

function subtractFive(number){
    var x = number;
    for (var i = 100; i >= 5; i = i - 5)
        console.log(i)
}

