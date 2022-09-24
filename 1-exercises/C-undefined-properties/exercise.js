/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

//Done ✔️

// Example 1
let car = {
  brand: "Ford",
  yearsOld: 8,
};

console.log(car["colour"]); // the code is trying to log a value that doesn't exist inside the car object. 

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`); // same as the previous example, firstName is not defined inside the user object. 
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy"; // this value is not defined inside myPet object. the function should target a value that myPet have. 
  },
};

console.log(myPet.getName());
