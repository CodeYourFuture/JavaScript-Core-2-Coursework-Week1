/*
  This object has 4 properties
  The properties of the object are all primitive types (string, number or boolean)
  What is the type of each property?
*/

let dog = {
  breed: "Dalmatian",//string
  name: "Spot",//string
  isHungry: true,//boolean
  happiness: 6//number
};

/*
  You can access the values of each property using dot notation.
  Log the name and breed of this dog using dot notation.
*/


 // complete the code

/* let dogName= "Spot"; 
let dogBreed= "Dalmatian"; */

console.log(`${dog.name} is a ${dog.breed}`);


/* EXPECTED RESULT

  Spot is a Dalmatian

*/


/* const house = {
  livingRoom: true,
  kitchen: ["fork", "spoon"],
  swimmingPool: {
    water: true,
    degree: 30 
  },
  myHouse: function(){
    console.log(`${this.swimmingPool.degree}`)
  }
}

house.myHouse() */