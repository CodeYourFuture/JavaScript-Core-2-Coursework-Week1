let buildings = {levels: 5, exits: 10, elevators: 4, restrooms: 20};

let buses = {color: "red", height: "double-decker", doors: "1"};

let trees = {height: "250ft", sizeOfLeaves: "medium", color: "orange", timeOfBloom: "winter"}

// console.log(buildings.elevators);

// console.log(buildings["elevators"]);

// console.log(trees.sizeOfLeaves);

// console.log(trees["sizeOfLeaves"]);

const person = {};
person.name = {givenName: "Karleen"};
person.age =  "21";

console.log(person);

person.name.familyName = "Richards";

// console.log(person.name);



let dog = {
    name: "Billy",
    wantsToPlay: false,
  };

//   dog.name = "Rex";
  dog["name"] = "Rex";
  dog.wantsToPlay = true;
  // WRITE CODE ABOVE THIS LINE
  console.log(dog.name);
  console.log(dog.wantsToPlay);
  // -> it should output:
  // Rex
  // true

  //Exercise 1:  Given the following object, log out the “firstName” 
  //property of the nested “currentOwner” object

//   let house = {
//     currentOwner: {
//       firstName: "Margaret",
//       lastName: "Conway",
//     },
//   };

//   console.log(house.currentOwner.firstName);

//Exercise 2: Given the following code (see Slack), 
//follow the instructions to get the expected result.


let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    },
    };

    house.address = '51 Berkley Road';
    house.previousOwners = ["Brian M.", "Fiona S."];
    house.currentOwner.lastName = "Montgomery";
    /*
    DO NOT EDIT ANYTHING ABOVE THIS LINE
    WRITE YOUR CODE BELOW
    */
    // - change the address of "house" to '51 Berkley Road'
    // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
    // - change the last name of the current owner of "house" to "Montgomery"
    /*


    
    DO NOT EDIT ANYTHING BELOW THIS LINE
    */
    console.log(
    `Expected result: 51 Berkley Road. Actual result: ${house.address}`
    );
    console.log(
    `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
    );
    console.log(
    `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
    );
  
    