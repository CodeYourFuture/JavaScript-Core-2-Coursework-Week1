/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1 === car object does not colour property. when we try to acces car colour using bracket notation the value will be undefined. 
// to solve this error we must add colour property with value before console.log
let car = {
  brand: "Ford",
  yearsOld: 8,
};
console.log(car["colour"]); 

// Example 2 === problem is user object doesnt has a property as firstName.
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user); 

// Example 3 === problem is here we are not returning anything explicitly from function. to solve this we need to add return inside of the function
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
