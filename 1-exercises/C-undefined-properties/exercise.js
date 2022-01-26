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
//key is not present in the object, a programmer would write this code to find out if color has been added 

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);
// object user only has a property <name>, therefore property <firstName> is not found 

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
   "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());

//function <getName()> does not return anything or console.log