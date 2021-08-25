console.log("Split and Join");
(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
 planetsArray = planetsString.split("|");
    console.log(planetsArray);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();

var myCar = {
    make:"Ford",
    year:2004,
    model:"Explorer"
};
var myCar1 = {
   // myCar1.make = "Honda" //dot notation
    make:"Honda",
    year:2016,
    model:"Odyssey"
};

myCar1.owner = {
    firstName:'Jose',
    lastName:'Maldonado',
}
myCar.owner = {
    firstName:'Alexandra',
    lastName:'Riojas',
}
myCar1.features = ["Backup Camera","Heated seats","Cooler Box","Blind Spot Camara"];
 console.log(myCar)
console.log(myCar1.features)
var theGarage = [myCar,myCar1];
 console.log(theGarage)
