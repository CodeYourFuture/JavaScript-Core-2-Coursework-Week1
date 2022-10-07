/*
  This object has 4 properties
  The properties of the object are all primitive types (string, number or boolean)
  What is the type of each property?
*/

let dog = {
  breed: "Dalmatian",
  name: "Spot",
  isHungry: true,
  happiness: 6,
};

function whatTypeOf(params) {
  for (let key in params) {
    console.log(`type of ${key} is: ${typeof params[key]}`);
  }
}
whatTypeOf(dog);
/*
  You can access the values of each property using dot notation.
  Log the name and breed of this dog using dot notation.
*/

let dogName = dog.name;
let dogBreed = dog.breed;

console.log(`${dogName} is a ${dogBreed}`);

/* EXPECTED RESULT

  Spot is a Dalmatian

*/
