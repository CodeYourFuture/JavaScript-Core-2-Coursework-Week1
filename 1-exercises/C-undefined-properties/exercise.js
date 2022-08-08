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
//This code logs undefined because firstly the property ["colour"] in the console.log was not set and no property can be added to an object without assigning any value to the property.

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira",
};

sayHelloToUser(user);
// In the code above, in the console.log, the property: user is not called properly. This log refers to a property name that does not exist. Being "user.firstName", instead of "user", it's proper variable.

// Example 3
let myPet = {
  animal: "Cat",
  getName: function () {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
//This code above has a method called getName and the function assigned to method, does not return it's
//message or result. Therefore when this method is called in the log, it logs "undefined".
