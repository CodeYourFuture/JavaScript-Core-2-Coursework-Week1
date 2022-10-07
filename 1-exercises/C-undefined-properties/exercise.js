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

// Answer of exampl1 - the reason undefined output is beacuse the value assign to the colour property.

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user);
// Answer for example 2 - the function fo sayHelloToUser is accessing wrong property name. fistName is not an existing property in user object.


// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
// Answer for example 3 
/*
The reason for undefined output in example 3. The getName method is not returning any anything
Two possible ways to output the sting is :
1) to use the return key word.
2) console log the whole statement.

*/
