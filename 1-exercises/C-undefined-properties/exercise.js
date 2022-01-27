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
// Answer 1
// We are trying to access a non-existing property on the car object using the bracket notation. We get back undefined.

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira",
};

sayHelloToUser(user);
// Answer 2
// We are calling the sayHello function, however, the function isn't returning an actual value. The firstName property doesnt exist either, which also get printed to the console as undefined.

// Example 3
let myPet = {
  animal: "Cat",
  getName: function () {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
// Answer 3
// We are calling the getName method on myPet object, however, the function value of the getName property isn't returning a value back.  It's missing the return keyword.
