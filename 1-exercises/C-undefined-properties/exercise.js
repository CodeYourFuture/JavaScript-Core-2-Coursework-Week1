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
//there is no key name of "colour" in the variable name car.

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);
//there is no key name of "firstName" in the variable name user.

// Example 3
let myPet = {
  animal: "Cat",
  petName: "kitty",
  getName: function() {
    "My pet's name is Fluffy";
  },
};

console.log(myPet['animal']);
console. log(myPet['petName']);

//it has to insert "return" on the "My pet's name is Fluffy"



// my practices

const students = [{name: 'Jan', age: 13, grade: '7'},
{name: 'Jany', age: 11, grade: '7'},
{name: 'Jammy', age: 12, grade: '7'}]
console.log(students[2]['name']);
console.log(students[0]['age']);

//  console.log(Jammy [age));

const usersNames = [ "Tina", "Mina", "Jnay", "John", "Krish"];
console.log(usersNames[0]);
usersNames.forEach( name => {
  console.log(name);
})
