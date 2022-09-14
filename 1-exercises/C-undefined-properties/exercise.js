/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

// ANSWER - 'colour' property isn't set on car object, so it's undefined.
let car = {
  brand: "Ford",
  yearsOld: 8,
};

console.log(car["colour"]);

// ANSWER - 'sayHelloToUser' function is set to user firstName property which isn't set on user object, so it's undefined.
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// ANSWER - 'getname' function should be an arrow function without curly brackets or it should have a return statement inside curly brackets.
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
