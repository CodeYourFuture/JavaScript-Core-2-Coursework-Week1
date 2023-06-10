/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let car = {
  brand: "Ford",
  yearsOld: 8,
};

console.log(car["colour"]); //"colour" is not defined as an object anywhere in the variable statement//

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user); //Hello in the console log is undefined, as well as 'firstName' not identified as the object 'name'//  

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName()); //has attempted to create a function element where the property should be//
