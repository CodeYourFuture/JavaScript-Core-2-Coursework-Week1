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

console.log(car["colour"]);
// this is undefined because the key doesn't exist in object car

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`); // the firstName here means nothing to js and it doesn't exist
}
// this is undefined because the user is a parameter of the function and when the function calls on line 30 it is calling nothing

let user = {
  // the user here is an object
  name: "Mira",
};

sayHelloToUser(user); // it is calling just the Hello the other part has nothing

// Example 3
let myPet = {
  animal: "Cat",
  getName: function () {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName()); // this function does't return nothing
