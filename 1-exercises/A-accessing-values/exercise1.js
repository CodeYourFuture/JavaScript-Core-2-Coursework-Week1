/*
  This object has 4 properties
  The properties of the object are all primitive types (string, number or boolean)
  What is the type of each property?
*/

let dog = {
  breed: "Dalmatian", //String
  name: "Spot", //String
  isHungry: true, //Boolean
  happiness: 6 // Number
};

/*
  You can access the values of each property using dot notation.
  Log the name and breed of this dog using dot notation.
*/

let dogName = {
  name: "Spot"
}; // complete the code

let dogBreed = {
  breed: "Dalmatian"
}; // complete the code


console.log(`${dogName.name} is a ${dogBreed.breed}`);

/* EXPECTED RESULT

  Spot is a Dalmatian

*/