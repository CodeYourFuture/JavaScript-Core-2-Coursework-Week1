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

console.log(car["colour"]);  // there is no properties with colour name in the object!

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.name}`); // in the object we have name property not firstName ,
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
    return "My pet's name is Fluffy";
  },
};
console.log(myPet.getName()); /// we shouldn't use pranteses when we are caling properties of an object! in this way we can see
                              // what is inside of the key and it shows it is function and its name is getName. if we want to print
                              //function it's better to call a function with out console.log , I mean use property of object alone like
                              // myPet.getName();
                              // if we add return in function then we have a result that we can print!
