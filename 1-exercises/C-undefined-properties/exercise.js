/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable dot-notation */
/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
const car = {
  brand: "Ford",
  yearsOld: 8,
};
// ANSWER - 'colour' property isn't set on car object, so it's undefined.
console.log(car["colour"]);

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

const user = {
  name: "Mira",
};
// ANSWER - 'sayHelloToUser' function is set to user firstName property which isn't set on user object, so it's undefined.
sayHelloToUser(user);

// Example 3
const myPet = {
  animal: "Cat",
  getName: () => "My pet's name is Fluffy",
  getName2: function () {
    return "My pet's name is Fluffy";
  },
  getName3() {
    return "My pet's name is Fluffy";
  },
};
// ANSWER - 'getname' function should be an arrow function without curly brackets or it should have a return statement inside curly brackets. Provided 3 examples of correct code
console.log(myPet.getName());
console.log(myPet.getName2());
console.log(myPet.getName3());
