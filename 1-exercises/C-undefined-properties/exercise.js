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
// car.colour = "black", we need to define colour here.

console.log(car["colour"]); //we don't have a property called colour in the object so we get undefined.

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira" 
  //firstName property does not exist
};

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function(name) {
    
     "My pet's name is Fluffy"; // we need to use the return key word statement
  },
};

console.log(myPet.getName());
