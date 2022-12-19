/*
  An object's properties can have values that are other objects or arrays.
*/

let basketballTeam = {
  name: "Chicago Bulls",
  numberOfPlayers: 15,
  topPlayers: ["Michael Jordan", "Scottie Pippen", "Dennis Rodman"],
  homeStadium: {
    name: "United Center",
    capacity: 21000,
    address: "1901 W Madison St",
  },
};

/*
  Write code that
    - accesses the basketball team's top players array
    - sorts the top players in alphabetical order
    - console.logs the name of each player on a new line
*/

// write code here
function getAcessAndSort(object, key2sort) {
  //run a for in loop for array keys
  //if array key is eqal to basket ball players
  let keyValue = object[`${key2sort}`];
  console.log(keyValue);
  let valueTest = Array.isArray(keyValue);
  console.log(valueTest);
  // and the value typeOf is an array
  //sort array alphabetivaly
  if (!valueTest) {
    return `the key ${key2sort} is not an array`;
    //keyValue.sort()
  }
  keyValue.sort();
  //console.log(KeyValue);
  // please explain why console.log breaks code.
  //is for loop each item console logs more efficient than map
  //as it does not return an array?

  return keyValue.map((el) => {
    console.log(el);
    return el;
  });
}

console.log(getAcessAndSort(basketballTeam, "topPlayers"));
/* EXPECTED RESULT

  Dennis Rodman
  Michael Jordan
  Scottie Pippen

*/
