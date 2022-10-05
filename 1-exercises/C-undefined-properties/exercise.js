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

//there is no colour key defined for the car object

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

// there is no key (firstName) assigned for the object user ..

let user = {
  name: "Mira",
};

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function () {
    "My pet's name is Fluffy";
  },
};

// there is no return in the function getName , but if we add return infront of the string , it will works normally
console.log(myPet.getName());
