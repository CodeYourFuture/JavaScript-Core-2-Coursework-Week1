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

//it shows undefined because colour (key-value) is not included inside the object.
// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}
//it will shows undefined because object property firstName is not assign on first place.

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
//function in the myPet object, the function is not actually returning any value, but only defining a string value without actually returning it. Therefore, when you try to log the result of myPet.getName() to the console, it will return undefined.