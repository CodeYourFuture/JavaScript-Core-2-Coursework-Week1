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
// Answer = here the property "colour" is not added to the objec car so the value is undefiend 

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);
//  Answer - in object user there is no property "firstname"  so calling the the fucnion is producing undefined value

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
   "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
//  Answer - in the method GetName the word "return" is ommitted