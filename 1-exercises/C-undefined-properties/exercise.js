/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1( car object does not have a property called colour.)
let car = {
  brand: "Ford",
  yearsOld: 8,
};

console.log(car["colour"]);

// Example 2( because the sayHelloToUser function tries to access the firstName property of the user object, which does not exist, so it returns undefined.)
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// Example 3(getName method will return the string "My pet's name is Fluffy" when called, and that will be logged to the console.)
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
