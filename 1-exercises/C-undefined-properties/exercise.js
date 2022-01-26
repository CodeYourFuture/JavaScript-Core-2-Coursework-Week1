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

console.log(car["colour"]); // Car hasn't got colour property.

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`); // Property firstName is not exist for object user.
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
   "My pet's name is Fluffy";// function hasn't got return
  },
};

console.log(myPet.getName());
