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
  // We do not have a property called colour to the car object ex..   colour:"red"
};

console.log(car["colour"]);

// Example 2

function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`); 
}
//  We do not have a property called firstName to the user object we can chang it to   console.log(`Hello ${user.name}`); 

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
    return "My pet's name is Fluffy";
    // we do noy have return here. the answer should be  return("My pet's name is Fluffy");
  },
};

console.log(myPet.getName());
