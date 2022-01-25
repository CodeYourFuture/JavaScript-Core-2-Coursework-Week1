/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
//We are seeing undefined here because the color property has not been defined
let car = {
  brand: "Ford",
  yearsOld: 8,
};

console.log(car["colour"]);

// Example 2
/* The 'name' property is not being used in the interpolation
 inside the function, instead 'firstName' is being used and this 
 is not the property name in the user object */

function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// // Example 3
// 'return' is not being used inside the 'getName' function
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
