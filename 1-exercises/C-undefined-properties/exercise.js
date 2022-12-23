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

// console.log(car["colour"]);
// There is no key named colour for the car object

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

// sayHelloToUser(user);
// There is no key named firstName (firstName has not been 'declared' as a key); 
// if we change the key "name" to "firstName" the above will work

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy";
    // return "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
// Perhaps because the function does not return anything? (Well, it works with return)
// Somehow, I would expect an error because the block of code for the function does not
// make sense; it's just a string...
