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

console.log(car["colour"]);//The object car does not have the property colour(doesn't defined).so output is undefined.

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);//The object user does not have the property firstName so user.firstName is undefined.
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy"; //This function didn't return anything. so when we call this function the output is undefined.
  },
};

console.log(myPet.getName());
