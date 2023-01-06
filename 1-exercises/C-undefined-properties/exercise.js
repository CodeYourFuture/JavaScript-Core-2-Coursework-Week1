/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1 Undefined happens as the 'colour' property of the car was never declared. It doesn't exists.
let car = {
  brand: "Ford",
  yearsOld: 8,
  colour: "blue",
};

console.log(car["colour"]);

// Example 2  user object has a property called 'name' even the functions appeals 'firstName' property which doesn't exist
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  firstName: "Mira",
};

sayHelloToUser(user);

// Example 3 the function misses a 'return' hence return should be written in front of the string
let myPet = {
  animal: "Cat",
  getName: function () {
    return "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
