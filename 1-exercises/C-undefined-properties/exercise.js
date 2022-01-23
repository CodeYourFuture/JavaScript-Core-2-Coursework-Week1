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

console.log(car["colour"]); // The colour property is not defined in the car object

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`); // Accessed object's property with the wrong keyword
}

let user = {
  name: "Mira",
};

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function () {
    "My pet's name is Fluffy"; // No return statement in the function
  },
};

console.log(myPet.getName());
