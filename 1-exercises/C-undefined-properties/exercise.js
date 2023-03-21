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
//Answer : We are trying to access the value of property called Colour in the car but colour is not defined in car object.

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);

//Answer : we are passing an object called user as an argument to the sayHelloToUser function. The function tries to access the firstName property of the user object, but this property does not exist. Therefore, when we try to log the string "Hello undefined" to the console, we see undefined instead of the expected value.

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());

//Answer: This does not return any value,the getname method in the mypet object returns a string that describes the pet's name,while the method does not use the return keyword. 
