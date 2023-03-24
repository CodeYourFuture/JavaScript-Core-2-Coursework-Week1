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

car["colour"] = "blue"

console.log(car["colour"]); //the color property isnt added to the car object you can do this 

let user = {
  name: "Mira"
};

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.name}`);  // you need to change firstName to name and it has to be above the function like this 
}

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
   return "My pet's name is Fluffy"; // nothing was being return here 
  },
};

console.log(myPet.getName());
