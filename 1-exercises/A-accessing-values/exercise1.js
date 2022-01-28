/*
  This object has 4 properties
  The properties of the object are all primitive types (string, number or boolean)
  What is the type of each property?
*/

let dog = {
  breed: "Dalmatian", //String type
  name: "Spot", //String type
  isHungry: true, // boolean type
  happiness: 6 // number type
};

/*
  You can access the values of each property using dot notation.
  Log the name and breed of this dog using dot notation.
*/

let dogName = dog.name
let dogBreed = dog.breed//complete the code

console.log(`${dogName} is a ${dogBreed}`);

/* EXPECTED RESULT

  Spot is a Dalmatian

*/