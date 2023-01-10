/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will 
    write code to handle it.
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
//we have not assigned property value to property name 'colour'.
/*
  the value of the colour property on car is being logged but it does not exist in the object.
  If you try to access the value of a key that does not exist on an object, JavaScript will return undefined.
*/

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira"
};

sayHelloToUser(user); 
//There's no property 'firstName' in the 'user' object
/*
  the value of the firstName property on user is being logged but it does not exist in the object.
  If you try to access the value of a key that does not exist on an object, JavaScript will return undefined.
*/

// Example 3
let myPet = {
  animal: "Cat",
  getName: function() {
     "My pet's name is Fluffy";
  },
};

console.log(myPet.getName()); 
//There's no return or log value from myPet object's getName() function, so it will return 'undefined'.
/*
  the getName method on the myPet object does not have a return statement, therefore it returns undefined.
*/                            
