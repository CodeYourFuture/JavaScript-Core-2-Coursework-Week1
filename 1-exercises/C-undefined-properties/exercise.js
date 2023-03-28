/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1 - 
//"colour was undefined as a property of car. I have added a colour property with a value of "Racing green" so that it now logs my chosen colour for car.
let car = {
  brand: "Ford",
  yearsOld: 8,
  colour: "Racing green"
};

console.log(car["colour"]);

// Example 2
function sayHelloToUser(user) {
  // console.log(`Hello ${user.firstName}`); The variable, user, only has "name" as a peoperty and not "firstName", so it logs undefined as it cannot find the value of firstname. I have changed the console log parameters to "user.name" instead and now it logs "Mira".
  console.log(`Hello ${user.name}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);

// Example 3 
//The function was not complete with a return value instruction. Added "return" to the value.
let myPet = {
  animal: "Cat",
  getName: function() {
    return "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
