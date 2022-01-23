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

console.log(car["colour"]); // The variable 'car' has no "colour" key defined

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`); // There is no "firstName" key defined
}

let user = {
  name: "Mira"
};


sayHelloToUser(user); // This function refers to the key "firstName" which has not been defined for 'user'

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {         // This function does NOT 'return' any value. By default, when there is no defined return, JS returns 'undefined' 
    "My pet's name is Fluffy"; //  This is just a function with a string in its definition! It does nothing! It returns nothing! Hence undefined
  },
};

console.log(myPet.getName());
