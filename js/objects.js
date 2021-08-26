
"use strict";

var person = {
        firstName:"Jose",
        lastName:"Maldonado",
}
console.log(person.firstName,person.lastName)

person.sayHello = function(){
    console.log("Hello from "+person.firstName+" "+person.lastName)
}
console.log(person.sayHello())

    var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
    ];
    console.log(shoppers)

shoppers.forEach(function(shopper,amount,name) {
    console.log(shopper)
    if(shopper.amount>= 200) {
        console.log(shopper.name+" amount is $"+shopper.amount);
        var discount = shopper.amount -(shopper.amount *= .12);
        console.log("But after the 12% discount he pays $"+discount)
    }else
        console.log(shopper.name+ " did not qualify for the discount so he pays $"+shopper.amount);

});



    var bookOne = {
        title: "Where the Red Fern Grows",
        author: {
            firstName: "Will",
            lastName: "I.Am"
        }
    }
    var bookTwo = {
        title: "The Bible",
        author: {
            firstName: "Jesus",
            lastName: "da God"
        }
    }
    var bookThree = {
        title: "Val",
        author: {
            firstName: "Val",
            lastName: "Kilmer"
        }
    }
    var books = [bookOne, bookTwo, bookThree]
    console.log(books)
    console.log(books[1].title + " written by " + books[1].author.firstName + " " + books[1].author.lastName)
    for (var i = 0; i < books.length; i++) {
        console.log("Book # " + (i + 1));
        console.log("Title : " + books[i].title);
        console.log("Written by : " + books[i].author.firstName + " " + books[i].author.lastName);
    }


