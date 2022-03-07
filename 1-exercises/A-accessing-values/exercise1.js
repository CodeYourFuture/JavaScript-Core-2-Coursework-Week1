/*
  This object has 4 properties
  The properties of the object are all primitive types (string, number or boolean)
  What is the type of each property?

  breed is a string 
  name is a string 
  isHungry is a boolean
  Happiness is a number

*/

let dog = {
  breed: "Dalmatian", //string
  name: "Spot", //string type
  isHungry: true, //boolean
  happiness: 6, //number type
};

/*
  You can access the values of each property using dot notation.
  Log the name and breed of this dog using dot notation.
*/

let dogName = dog.name; // complete the code
let dogBreed = dog.breed; // complete the code

//format without adding `+`
console.log(`${dogName} is a ${dogBreed}`);

// console.log(dogName + ` is a ` + dogBreed);

/* EXPECTED RESULT

  Spot is a Dalmatian

*/
