(function(){
    "use strict";
var names = ['Leonardo', 'Donatello','Raphael','Michelangelo'];
    console.log("I have "+names.length+ " items in my names array.");
    console.log(""+names[0]+"'s the leader in blue, Does anything it takes to get his ninjas through" );
    console.log(""+names[1]+" is a fellow, has a way with machines");
    console.log(""+names[2]+" has the most attitude on the team");
    console.log(""+names[3]+" he's one of a kind and you know just where to find him when its party time!");

    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is: ' + names[i]);
    }
    names.forEach(function(name) {
        console.log('Heroes in a Half-shell Turtle Power: ' + name + '.');
    });
return names;
function firstName (array) {
return array.slice(1);
}

function second([]){
}
function last([]){
}
})();

//create a function that takes in an array of pies baked and return the 3 most recently baked pies

function lastThreeBakedPies(array){
    return array.slice(-3);
}


